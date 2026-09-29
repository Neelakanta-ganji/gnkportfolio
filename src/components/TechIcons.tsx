import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function GitHubIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-label="GitHub"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-label="LinkedIn"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} width={size} height={size} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" className={className} width={size} height={size} fill="none">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.538L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.176 149.508 157.538Z"
        fill="#000000"
      />
      <rect x="115" y="54" width="12" height="72" fill="#000000" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="none">
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        d="M60.8 40H32v11.7h11.2V98h14.8V51.7h11.2V40h-8.4zm42.7 17.5c-3.1-3.6-7.3-5.4-12.7-5.4-8.8 0-14.8 4.2-14.8 11.8 0 6.1 3.8 9.7 12.3 12.8l4.4 1.7c5.6 2 7.7 4.2 7.7 8.3 0 5.4-5.3 9.1-13 9.1-7.2 0-12.4-3.5-15.6-9.2l-10.9 7.3c4.7 9.1 14.1 14.2 26.5 14.2 17.3 0 28.2-8.5 28.2-21.3 0-9.2-5.4-14.3-15.5-18.1l-4.5-1.7c-4.3-1.6-6.3-3.3-6.3-6.4 0-3.6 3.6-6.1 8.7-6.1 4.7 0 8.3 1.8 10.7 4.8l10.9-7.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="none">
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path
        d="M40.2 101.4c-6.8 0-12.2-3.1-15.3-8.8l9.4-7.4c1.8 3.1 4.3 5 7.4 5 3.1 0 5.5-1.8 5.5-6.1V49.6h12.5v34.5c0 10.7-6.7 17.3-19.5 17.3zm48.8.6c-12.6 0-20.7-6.9-24.5-15l10.9-6.3c2.4 5 6.1 8.6 12.4 8.6 5 0 8.7-2.4 8.7-6.2 0-4.3-3.1-6.1-9.4-8.8l-4.3-1.8c-9.4-4-14.4-9.1-14.4-17.9 0-10.6 9.3-18.1 21.2-18.1 8.8 0 15.7 3.7 20 11.2l-9.8 6.9c-2.4-3.8-5.6-5.6-10.2-5.6-4.4 0-7.5 2.5-7.5 5.6 0 3.7 2.5 5.6 8.7 8.1l4.4 1.9c11.2 4.4 16.8 10 16.8 18.7 0 10.7-9.4 19-23 19z"
        fill="#1e1e1e"
      />
    </svg>
  );
}

export function HTML5Icon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#E34F26" />
      <path d="M12 3.8V20.4L17.7 18.8L19.2 3.8H12Z" fill="#EF652A" />
      <path d="M12 8.4H8.2L8.5 11.6H12V8.4ZM12 14.7L9.7 14.1L9.6 12.8H7.5L7.8 16.1L12 17.3V14.7Z" fill="#EBEBEB" />
      <path d="M12 8.4V11.6H15.6L15.3 14.7L12 15.6V17.3L16.2 16.1L16.8 8.4H12Z" fill="white" />
    </svg>
  );
}

export function CSS3Icon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#1572B6" />
      <path d="M12 3.8V20.4L17.7 18.8L19.2 3.8H12Z" fill="#33A9DC" />
      <path d="M12 8.4H8.2L8.4 10.6H12V8.4ZM12 12.7H8.6L8.8 14.9L12 15.8V13.8L10.7 13.4L10.6 12.7H12V12.7Z" fill="#EBEBEB" />
      <path d="M12 8.4V10.6H15.6L15.4 12.7H12V14.9L15.2 14L15.4 12.7H17.4L17 16.1L12 17.5V15.4L12 8.4Z" fill="white" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function NodejsIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="none">
      <path
        d="M64 4.5l54.8 31.6v63.8L64 123.5 9.2 99.9V36.1L64 4.5z"
        fill="#339933"
      />
      <path
        d="M64 10.2L14.2 38.9v57.4L64 117.8l49.8-28.7V38.9L64 10.2z"
        fill="#66CC33"
      />
      <path
        d="M64 24.3l37.6 21.7v43.4L64 111.1 26.4 89.4V46L64 24.3z"
        fill="#339933"
      />
      <path
        d="M64 36.5l27 15.6v31.2L64 98.9 37 83.3V52.1L64 36.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="currentColor">
      <path d="M24 40h16l14 26 14-26h16L63 78l23 34H70L54 84 38 112H22l23-34L24 40zm68 0h14v72H92V40z" />
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M11.9 2C8.6 2 6.8 3.5 6.8 5.6V7.6H12V8.4H4.5C2.5 8.4 1 9.9 1 11.9C1 14 2.5 15.4 4.5 15.4H6V13.8C6 11.7 7.7 10.1 9.8 10.1H15.1C16.7 10.1 18 8.8 18 7.2V5.6C18 3.5 15.2 2 11.9 2ZM9.4 3.7C9.9 3.7 10.4 4.1 10.4 4.6C10.4 5.2 9.9 5.6 9.4 5.6C8.8 5.6 8.4 5.2 8.4 4.6C8.4 4.1 8.8 3.7 9.4 3.7Z" fill="#3776AB" />
      <path d="M12.1 22C15.4 22 17.2 20.5 17.2 18.4V16.4H12V15.6H19.5C21.5 15.6 23 14.1 23 12.1C23 10 21.5 8.6 19.5 8.6H18V10.2C18 12.3 16.3 13.9 14.2 13.9H8.9C7.3 13.9 6 15.2 6 16.8V18.4C6 20.5 8.8 22 12.1 22ZM14.6 20.3C14.1 20.3 13.6 19.9 13.6 19.4C13.6 18.8 14.1 18.4 14.6 18.4C15.2 18.4 15.6 18.8 15.6 19.4C15.6 19.9 15.2 20.3 14.6 20.3Z" fill="#FFD43B" />
    </svg>
  );
}

export function JavaIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M9 19.5C12 20 15 19.5 17 19" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 21.5C12 22.5 16 22 18.5 21" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 2C10.5 4 11 6 12.5 7.5C14 9 13 11 11.5 13" stroke="#5382A1" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 4C14 5.5 14.5 7 16 8.5C17.5 10 16 12 14.5 13.5" stroke="#5382A1" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SpringBootIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <circle cx="12" cy="12" r="10" fill="#6DB33F" />
      <path d="M7 16C7 16 8.5 17.5 11 16.5C13.5 15.5 15.5 12 17 8C17 8 13.5 8.5 11 11C8.5 13.5 7 16 7 16Z" fill="white" />
    </svg>
  );
}

// 100% OFFICIAL MySQL Sakila Dolphin SVG (Devicon official)
export function MySQLIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <path
        fill="#00618A"
        d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
      />
    </svg>
  );
}

// 100% OFFICIAL PostgreSQL Elephant Slonik SVG (Devicon official)
export function PostgreSQLIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <path
        fill="#336791"
        d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
      />
      <path
        fill="#FFFFFF"
        opacity="0.85"
        d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 011.64-1.55 1.594 1.594 0 011.55 1.639c-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 011.71-1.472 1.597 1.597 0 011.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454"
      />
    </svg>
  );
}

export function MongoDBIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M12 2C12 2 6 7 6 13.5C6 17.5 8.5 20.5 11.5 21.8V22L12 21.9L12.5 22V21.8C15.5 20.5 18 17.5 18 13.5C18 7 12 2 12 2Z" fill="#47A248" />
      <path d="M12 2V21.9C11.7 21.8 11.5 21.6 11.2 21.4C8.7 20 6.5 17.2 6.5 13.5C6.5 8 11.5 3 12 2Z" fill="#4CAF50" />
    </svg>
  );
}

export function CassandraIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <circle cx="12" cy="12" r="9" stroke="#1E88E5" strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#1E88E5" strokeWidth="1.5" transform="rotate(-30 12 12)" />
      <circle cx="12" cy="12" r="3" fill="#1E88E5" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="#2496ED">
      <path d="M13.96 5.46h-2.17v2.17h2.17V5.46zm-2.61 0H9.18v2.17h2.17V5.46zm-2.61 0H6.57v2.17h2.17V5.46zm7.83 2.61h-2.17v2.17h2.17V8.07zm-2.61 0h-2.17v2.17h2.17V8.07zm-2.61 0H9.18v2.17h2.17V8.07zm-2.61 0H6.57v2.17h2.17V8.07zm-2.61 0H1.35v2.17h2.17V8.07zm15.65 2.61h-2.17v2.17h2.17v-2.17zm-2.61 0h-2.17v2.17h2.17v-2.17zm-2.61 0h-2.17v2.17h2.17v-2.17zm-2.61 0H9.18v2.17h2.17v-2.17zm-2.61 0H6.57v2.17h2.17v-2.17zm-2.61 0H3.96v2.17h2.17v-2.17zm14.39 1.13c-.35-.22-1.17-.35-1.91.13-.17.13-.3.3-.43.48-.48-.35-1.13-.52-1.87-.52H1.52C.65 14.43 0 15.08 0 15.95c0 3.39 2.57 6.13 5.74 6.13 4.39 0 7.87-2.65 9.35-6.52 1.39.09 3.35-.17 4.26-2.13.26-.52.26-1.13.04-1.56z" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M22.5 10.9L13.1 1.5C12.4.8 11.4.8 10.7 1.5L8.9 3.3L11.2 5.6C11.9 5.3 12.7 5.5 13.2 6.1C13.8 6.6 13.9 7.5 13.6 8.2L15.8 10.4C16.5 10.1 17.4 10.3 17.9 10.8C18.6 11.5 18.6 12.6 17.9 13.3C17.2 14 16.1 14 15.4 13.3C14.9 12.8 14.7 11.9 15 11.2L12.9 9.1V14.7C13.2 15 13.4 15.5 13.4 16C13.4 17.1 12.5 18 11.4 18C10.3 18 9.4 17.1 9.4 16C9.4 15.4 9.7 14.8 10.1 14.5V8.9C9.7 8.6 9.4 8 9.4 7.4C9.4 6.9 9.6 6.4 10 6L7.7 3.7L1.5 9.9C.8 10.6.8 11.6 1.5 12.3L10.9 21.7C11.6 22.4 12.6 22.4 13.3 21.7L22.5 12.5C23.2 11.8 23.2 10.8 22.5 10.9Z" fill="#F05032" />
    </svg>
  );
}

export function FirebaseIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M4.5 18.5L9 3.5L12 9.5L4.5 18.5Z" fill="#FFA000" />
      <path d="M15 8L12.5 3.5L4.5 18.5L15 8Z" fill="#F57C00" />
      <path d="M19.5 18.5L15 8L4.5 18.5L11.5 22.5C11.8 22.7 12.2 22.7 12.5 22.5L19.5 18.5Z" fill="#FFCA28" />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 109 113" className={className} width={size} height={size} fill="none">
      <path
        d="M63.7076 110.284C60.848 113.885 55.0697 111.917 54.9818 107.314L53.9738 54.7661H96.7974C104.539 54.7661 108.977 63.5937 104.301 69.4812L63.7076 110.284Z"
        fill="url(#supabase_grad_a)"
      />
      <path
        d="M45.297 2.71597C48.1566 -0.885233 53.9349 1.08277 54.0228 5.68595L54.4828 58.2339H12.2072C4.46556 58.2339 0.0276637 49.4063 4.7037 43.5188L45.297 2.71597Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="supabase_grad_a"
          x1="53.9738"
          y1="54.7661"
          x2="87.0543"
          y2="104.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
    </svg>
  );
}


export function GeminiIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path
        d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
        fill="url(#gemini-grad)"
      />
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#9B72CF" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AzureIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M13.2 3.5L4 16.8H9.8L13.2 12.5H19.5L13.2 3.5Z" fill="#0089D6" />
      <path d="M13.5 13.5L9.5 19.5H21.5L18.5 13.5H13.5Z" fill="#0072C6" />
    </svg>
  );
}

export function VercelIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="currentColor">
      <path d="M12 2L24 22H0L12 2Z" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="#FF6C37">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2V13h2v3.5zm2.5-5.5h-7V9h7v2z" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M14.2 2.5L4.5 12.2L7.6 15.3L20.4 2.5H14.2Z" fill="#42A5F5" />
      <path d="M14.2 13.3L8.8 18.7L12 21.9L20.4 13.3H14.2Z" fill="#0D47A1" />
      <path d="M8.8 18.7L12 15.5L15.2 18.7L12 21.9L8.8 18.7Z" fill="#29B6F6" />
    </svg>
  );
}

export function AndroidIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="#3DDC84">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 2.24 12.88 2 12 2c-.88 0-1.72.24-2.64.63L7.88 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.73 4.25 5.5 6.01 5.5 8h13c0-1.99-1.23-3.75-2.97-4.84zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M8.5 7.5L15.5 16.5M6 9v6M18 9v6" />
    </svg>
  );
}

export function MLIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="#F58220" strokeWidth="2">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.7 10.7L15.3 7.3M8.7 13.3L15.3 16.7" />
    </svg>
  );
}

export function FramerMotionIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
    </svg>
  );
}

export function ShadcnIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 256 256" className={className} width={size} height={size} fill="none">
      <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 38 57" className={className} width={size} height={size} fill="none">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

export function NpmIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="none">
      <path d="M0 0h128v128H0z" fill="#CB3837" />
      <path d="M16 16h96v96H64V48H48v64H16z" fill="#FFFFFF" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5", size }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
