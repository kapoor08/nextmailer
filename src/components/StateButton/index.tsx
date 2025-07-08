"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "./Button.css";
import { CircularProgress } from "@mui/material";

interface StateButtonProps {
  text?: string;
  handleClick: () => void;
  className?: string;
  isDisabled?: boolean;
  loading: boolean;
}

const StateButton: React.FC<StateButtonProps> = ({
  text = "",
  handleClick,
  className = "",
  isDisabled = false,
  loading,
}) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", `${x}px`);
        button.style.setProperty("--y", `${y}px`);
      };

      const handleMouseLeave = () => {
        button.style.setProperty("--x", `50%`);
        button.style.setProperty("--y", `50%`);
      };

      const handleClick = () => {
        button.classList.toggle("clicked");
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("click", handleClick);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <button
      className={`custom-button !w-fit ${className}`}
      onClick={handleClick}
      ref={buttonRef}
      disabled={isDisabled}
    >
      <span className="!whitespace-nowrap">
        {loading ? <CircularProgress color="inherit" size={24} /> : text}
      </span>
      <div className="circle-container-right">
        <div className="circle-right"></div>
      </div>
      <div className="circle-container-left">
        <div className="circle-left"></div>
      </div>
      <div className="circle-container-middle">
        <div className="circle-middle"></div>
        <div className="circle-middle-second"></div>
      </div>
      <div className="circle-container-left-bottom">
        <div className="circle-left-bottom"></div>
      </div>
      <div className="circle-container-right-bottom">
        <div className="circle-right-bottom"></div>
      </div>
      <div className="circle-container-right-middle">
        <div className="circle-right-middle"></div>
      </div>
      <div className="circle-container-left-middle">
        <div className="circle-left-middle"></div>
      </div>
      <div className="circle-container-top-left-middle">
        <div className="circle-top-left-middle"></div>
      </div>
      <div className="circle-container-centre">
        <div className="circle-centre"></div>
      </div>
    </button>
  );
};

export default StateButton;
