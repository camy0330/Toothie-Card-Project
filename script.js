document.addEventListener('DOMContentLoaded', () => {
    const interactiveCard = document.getElementById('interactiveCard');
    let flipCount = 0; // 0: Front, 1: QR1, 2: QR2
    let qrTimer;

    interactiveCard.addEventListener('click', () => {
        // 1. Clear any existing timer to prevent unintended auto-flipping
        clearTimeout(qrTimer);

        // 2. Determine the next state
        if (!interactiveCard.classList.contains('flipped')) {
            // State 0 (Front) -> State 1 (QR1)
            interactiveCard.classList.add('flipped', 'show-qr1');
            interactiveCard.classList.remove('show-qr2');
            flipCount = 1;

        } else if (interactiveCard.classList.contains('show-qr1')) {
            // State 1 (QR1) -> State 2 (QR2)
            interactiveCard.classList.remove('show-qr1');
            interactiveCard.classList.add('show-qr2');
            flipCount = 2;

        } else if (interactiveCard.classList.contains('show-qr2')) {
            // State 2 (QR2) -> State 0 (Front)
            interactiveCard.classList.remove('flipped', 'show-qr2');
            flipCount = 0;
        }

        // 3. Set a timer to flip back after 3 seconds if a QR code is currently visible (State 1 or 2)
        if (flipCount === 1 || flipCount === 2) {
            qrTimer = setTimeout(() => {
                interactiveCard.classList.remove('flipped', 'show-qr1', 'show-qr2');
                flipCount = 0; // Reset count
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    });
});