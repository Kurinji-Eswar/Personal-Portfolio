from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    #page-wrapper.fade-out {
        animation: fadeOut 1s ease-in;
    }
`;
document.head.appendChild(style);
