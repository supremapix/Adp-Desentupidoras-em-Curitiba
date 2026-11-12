import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Share2, Phone, MessageCircle, ArrowUp, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../constants';
const CONTACT_INFO={canonicalDomain:'https://adpservicos.app.br',phone:PHONE_DISPLAY,phoneLink:PHONE_LINK,whatsapp:WHATSAPP_DISPLAY,whatsappLink:WHATSAPP_LINK};

export default function FloatingActions() {
  const { pathname } = useLocation();
  const [open,setOpen] = useState(false), [top,setTop] = useState(false), [menu,setMenu] = useState(false);
  const [status,setStatus] = useState('');
  const [canNativeShare,setCanNativeShare] = useState(false);
  useEffect(()=>setCanNativeShare(typeof navigator.share==='function'),[]);
  const panel = useRef<HTMLDivElement>(null), trigger = useRef<HTMLButtonElement>(null);
  const url = CONTACT_INFO.canonicalDomain + (pathname === '/' ? '/' : pathname);
  const text = `Conheça os serviços de encanador e desentupidora da ADP em Curitiba e região. ${url}`;
  const image = CONTACT_INFO.canonicalDomain + '/og-image.jpg';
  useEffect(() => { setOpen(false); setStatus(''); }, [pathname]);
  useEffect(() => {
    const scroll = () => setTop(window.scrollY > 300);
    const toggle = (e:Event) => { const active = Boolean((e as CustomEvent).detail?.isOpen); setMenu(active); if(active) setOpen(false); };
    scroll(); window.addEventListener('scroll',scroll,{passive:true}); window.addEventListener('adp-mobile-menu-toggle',toggle);
    return () => {window.removeEventListener('scroll',scroll);window.removeEventListener('adp-mobile-menu-toggle',toggle);};
  },[]);
  useEffect(() => {
    if(!open) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const nodes = (): HTMLElement[] => panel.current ? Array.from(panel.current.querySelectorAll('button,a[href],input,summary')) as HTMLElement[] : [];
    nodes()[0]?.focus();
    const key = (e:KeyboardEvent) => {
      if(e.key==='Escape') {e.preventDefault();setOpen(false);}
      if(e.key==='Tab') { const a=nodes(), first=a[0],last=a[a.length-1]; if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();} }
    };
    document.addEventListener('keydown',key);
    return () => {document.body.style.overflow=previous; document.removeEventListener('keydown',key);trigger.current?.focus();};
  },[open]);
  const copy = async () => {
    try {
      if(navigator.clipboard) await navigator.clipboard.writeText(text);
      else { const area=document.createElement('textarea');area.value=text;document.body.appendChild(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw Error(); }
      setStatus('Texto e link copiados.');
    } catch {setStatus('Não foi possível copiar. Selecione o endereço abaixo.');}
  };
  const native = async () => {
    try { await navigator.share({title:'Desentupidora ADP',text,url}); }
    catch(e){if((e as Error).name!=='AbortError')setStatus('Use uma das redes ou copie o link.');}
  };
  const shareImage = async () => {
    try {
      const response=await fetch('/og-image.jpg');if(!response.ok)throw Error();
      const file=new File([await response.blob()],'adp-curitiba.jpg',{type:'image/jpeg'});
      if(navigator.canShare?.({files:[file]})) await navigator.share({files:[file],title:'Desentupidora ADP',text});
      else {setStatus('Use Baixar imagem e anexe o arquivo na rede desejada.');}
    }catch(e){if((e as Error).name!=='AbortError')setStatus('Baixe a imagem pelo botão abaixo para compartilhar.');}
  };
  const channels=[
    ['WhatsApp',`https://wa.me/?text=${encodeURIComponent(text)}`],
    ['Facebook',`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`],
    ['X',`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`],
    ['Pinterest',`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(text)}`],
    ['LinkedIn',`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
    ['Threads',`https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`]
  ];
  if(menu)return null;
  return <>
    <button ref={trigger} className="sup-share-trigger" aria-label="Compartilhar esta página" aria-expanded={open} aria-haspopup="dialog" onClick={()=>setOpen(true)}><Share2 size={20}/><span>Compartilhar</span></button>
    <div className="sup-contact-actions">
      {top&&<button aria-label="Voltar ao topo" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}><ArrowUp size={22}/></button>}
      <a href={CONTACT_INFO.phoneLink} aria-label={`Ligar para ${CONTACT_INFO.phone}`}><Phone size={22}/><span>Ligar</span></a>
      <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="sup-whatsapp" aria-label={`Falar com a ADP no WhatsApp ${CONTACT_INFO.whatsapp}`}><MessageCircle size={22}/><span>WhatsApp</span></a>
    </div>
    {open&&<div className="sup-share-backdrop" onClick={e=>{if(e.target===e.currentTarget)setOpen(false);}}>
      <div ref={panel} className="sup-share-panel" role="dialog" aria-modal="true" aria-labelledby="sup-share-title">
        <div className="sup-share-heading"><h2 id="sup-share-title">Recomendar esta página</h2><button aria-label="Fechar compartilhamento" onClick={()=>setOpen(false)}><X size={22}/></button></div>
        <div className="sup-share-networks">{channels.map(([name,href])=><a key={name} href={href} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
        <button className="sup-copy" onClick={copy}>Copiar texto e link</button>
        <label className="sup-url-label">Endereço desta página<input value={url} readOnly onFocus={e=>e.target.select()}/></label>
        {canNativeShare&&<button className="sup-secondary" onClick={native}>Mais opções de compartilhamento</button>}
        <details className="sup-share-image"><summary>Compartilhar imagem</summary><img src="/og-image.jpg" alt="Apresentação dos serviços da ADP" width="1200" height="630"/><button className="sup-secondary" onClick={shareImage}>Compartilhar esta imagem</button><a className="sup-secondary" href="/og-image.jpg" download="adp-curitiba.jpg">Baixar imagem</a><p>A rede escolhida pode aceitar somente o link. Você também pode baixar e anexar a imagem.</p></details>
        <p className="sup-share-status" role="status" aria-live="polite">{status}</p>
      </div>
    </div>}
  </>;
}
