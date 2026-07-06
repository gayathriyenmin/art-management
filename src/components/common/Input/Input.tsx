import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 text-text-muted pointer-events-none flex items-center">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full bg-white text-secondary placeholder-text-muted text-sm rounded-xl border ${
              error ? 'border-error focus:ring-error/20' : 'border-border-color focus:ring-primary/20'
            } ${icon ? 'pl-11' : 'px-4'} py-3 transition-all focus:outline-none focus:ring-4 focus:border-primary disabled:opacity-50 disabled:bg-slate-50 ${className}`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-error font-medium animate-fadeIn">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
