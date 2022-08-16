import { createContext, ReactNode, useEffect, useState } from "react";

interface IHomeContextProviderProps {
  children: ReactNode;
}

interface IHomeContext {
  pageTitle: string;
  pageDescription: string;
  menuOptions: {
    label: string;
    target: string;
  }[];
  logo: string;
}

export const defaultHomeContext = {
  pageTitle: "",
  pageDescription: "",
  menuOptions: [],
  logo: "",
}

export const HomeContext = createContext<IHomeContext>(defaultHomeContext);

export const HomeContextProvider = ({ children }: IHomeContextProviderProps) => {

  const pageTitle = 'GC Estúdio';
  const pageDescription = 'Lorem ipsum';
  const menuOptions = [
    {
      label: 'Sobre',
      target: '#',
    },
    {
      label: 'Serviços',
      target: '#',
    },
    {
      label: 'Projetos',
      target: '#',
    },
    {
      label: 'Clientes',
      target: '#',
    },
    {
      label: 'Contato',
      target: '#',
    },
  ];

  const logo = '/images/logo.svg'

  const contextValue = {
    pageTitle,
    pageDescription,
    menuOptions,
    logo,
  };

  return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
}