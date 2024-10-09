import React from "react";

interface svgProps {
  selected: boolean;
}

function Customsvg({ selected }: svgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 7.98438C2 8.1157 2.02587 8.24573 2.07612 8.36706C2.12638 8.48838 2.20003 8.59862 2.29289 8.69148C2.38575 8.78434 2.49599 8.858 2.61732 8.90825C2.73864 8.95851 2.86868 8.98438 3 8.98438C3.13132 8.98438 3.26136 8.95851 3.38268 8.90825C3.50401 8.858 3.61425 8.78434 3.70711 8.69148C3.79997 8.59862 3.87362 8.48838 3.92388 8.36706C3.97413 8.24573 4 8.1157 4 7.98438C4 7.85305 3.97413 7.72302 3.92388 7.60169C3.87362 7.48037 3.79997 7.37013 3.70711 7.27727C3.61425 7.18441 3.50401 7.11075 3.38268 7.0605C3.26136 7.01024 3.13132 6.98438 3 6.98438C2.86868 6.98438 2.73864 7.01024 2.61732 7.0605C2.49599 7.11075 2.38575 7.18441 2.29289 7.27727C2.20003 7.37013 2.12638 7.48037 2.07612 7.60169C2.02587 7.72302 2 7.85305 2 7.98438ZM7 7.98438C7 8.24959 7.10536 8.50395 7.29289 8.69148C7.48043 8.87902 7.73478 8.98438 8 8.98438C8.26522 8.98438 8.51957 8.87902 8.70711 8.69148C8.89464 8.50395 9 8.24959 9 7.98438C9 7.71916 8.89464 7.4648 8.70711 7.27727C8.51957 7.08973 8.26522 6.98438 8 6.98438C7.73478 6.98438 7.48043 7.08973 7.29289 7.27727C7.10536 7.4648 7 7.71916 7 7.98438ZM12 7.98438C12 8.24959 12.1054 8.50395 12.2929 8.69148C12.4804 8.87902 12.7348 8.98438 13 8.98438C13.2652 8.98438 13.5196 8.87902 13.7071 8.69148C13.8946 8.50395 14 8.24959 14 7.98438C14 7.71916 13.8946 7.4648 13.7071 7.27727C13.5196 7.08973 13.2652 6.98438 13 6.98438C12.7348 6.98438 12.4804 7.08973 12.2929 7.27727C12.1054 7.4648 12 7.71916 12 7.98438Z"
        fill={selected ? "#1890FF" : "#8F97A2"}
      />
    </svg>
  );
}

export default Customsvg;