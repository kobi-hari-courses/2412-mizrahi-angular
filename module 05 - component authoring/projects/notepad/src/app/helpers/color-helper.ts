export function invertColor(color: string): string {
    // Create a temporary element to resolve CSS color strings
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    document.body.appendChild(tempElement);

    // Get the resolved color in rgb() format
    const computedColor = getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);

    // Extract the RGB components
    const match = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) {
        throw new Error("Invalid color format");
    }

    const [_, r, g, b] = match.map(Number);

    // Calculate the inverse
    const invertedColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

    return invertedColor;
}
