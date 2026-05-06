"use client";
import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  props?: Record<string, any>;
};

const Button = ({
  text,
  link = "",
  type = "button",
  disabled = false,
  loading = false,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={ariaLabel || text}
      {...props}
    >
      {loading && <span aria-hidden="true" />}
      {link ? <Link href={link}>{text}</Link> : <span>{text}</span>}
    </button>
  );
};

export default Button;
