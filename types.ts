import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  priceStart: number;
  benefits: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface LocationData {
  type: 'cidade' | 'bairro';
  name: string;
  slug: string;
}