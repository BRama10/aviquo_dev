export function mapDimensions(id: string) {
    const myElement = document.getElementById(id);
    if (myElement) {
        myElement.removeAttribute('style');

        const computedHeight = window.getComputedStyle(myElement).height;
        const computedWidth = window.getComputedStyle(myElement).width;

        myElement.style.height = computedHeight;
        myElement.style.width = computedWidth;
    }
}