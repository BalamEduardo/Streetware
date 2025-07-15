'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Aquí podrías enviar el error a un servicio de monitoreo
    // trackError(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-brand flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-display text-white mb-4">
                Algo salió mal
              </h1>
              
              <p className="text-white/70 mb-8 leading-relaxed">
                Ocurrió un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="
                  w-full
                  px-6 py-3
                  bg-brand-yellow
                  text-brand
                  font-bold
                  rounded-lg
                  hover:bg-brand-yellow/90
                  transition-colors duration-200
                "
              >
                Reintentar
              </button>
              
              <Link
                href="/"
                className="
                  block w-full
                  px-6 py-3
                  border-2 border-white/30
                  text-white
                  font-semibold
                  rounded-lg
                  hover:bg-white/10
                  transition-all duration-200
                "
              >
                Ir al Inicio
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-white/50 text-sm cursor-pointer mb-2">
                  Error Details (Dev Mode)
                </summary>
                <pre className="text-xs text-red-300 bg-black/30 p-4 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Error 404 personalizado
export function NotFoundError() {
  return (
    <div className="min-h-screen bg-brand flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-display text-brand-accent mb-4">404</div>
          <h1 className="text-2xl font-display text-white mb-4">
            Página no encontrada
          </h1>
          <p className="text-white/70 mb-8 leading-relaxed">
            La página que buscas no existe o ha sido movida. 
            Explora nuestro catálogo para descubrir piezas increíbles.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="
              block w-full
              px-6 py-3
              bg-brand-yellow
              text-brand
              font-bold
              rounded-lg
              hover:bg-brand-yellow/90
              transition-colors duration-200
            "
          >
            Ir al Inicio
          </Link>
          
          <Link
            href="/catalogo"
            className="
              block w-full
              px-6 py-3
              border-2 border-brand-accent
              text-brand-accent
              font-semibold
              rounded-lg
              hover:bg-brand-accent/10
              transition-all duration-200
            "
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
