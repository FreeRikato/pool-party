import { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  icon?: string;
  className?: string;
}

export default function Select({
  value,
  onChange,
  options,
  label,
  placeholder = "Select an option",
  icon,
  className = "",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          onChange(options[focusedIndex].value);
          setIsOpen(false);
          setFocusedIndex(-1);
        } else {
          setIsOpen(true);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
        break;
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-semibold text-on-surface-variant mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`
          w-full bg-surface-container-low border-none rounded-xl py-4 px-4
          flex items-center justify-between gap-3
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary/20
          ${isOpen ? "ring-2 ring-primary/20" : ""}
          text-left
        `}
      >
        <span className={selectedOption ? "text-on-surface font-medium" : "text-on-surface-variant"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="material-symbols-outlined text-on-surface-variant">
          {icon || "expand_more"}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <ul
            ref={listRef}
            role="listbox"
            className="absolute z-20 w-full mt-2 bg-surface-container-lowest rounded-xl overflow-hidden py-2 max-h-60 overflow-y-auto outline outline-[rgba(171,173,174,0.15)]"
            style={{
              boxShadow: "0 8px 24px rgba(44, 47, 48, 0.08)",
            }}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`
                  px-4 py-3 cursor-pointer transition-colors duration-150
                  ${option.value === value ? "bg-primary-container text-on-primary-container" : "text-on-surface hover:bg-surface-container-low"}
                  ${focusedIndex === index ? "bg-surface-container-low" : ""}
                `}
              >
                <span className="font-medium">{option.label}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
