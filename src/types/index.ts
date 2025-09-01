import React from 'react'

export interface NavigationItem {
  name: string
  href: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  href: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  details: string
  description: string
}

export interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface FooterLinks {
  company: NavigationItem[]
  services: NavigationItem[]
  resources: NavigationItem[]
} 