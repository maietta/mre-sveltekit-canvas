
import { createCanvas } from 'canvas';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {

    const quote: string = "The quick brown fox jumps over the lazy dog";
    const columns: number = 18;
    const cellSize: number = 70;

    let rows: number = Math.ceil(quote.length / columns);
    const totalSquares: number = columns * rows;
    const width: number = cellSize * columns;
    const height: number = cellSize * rows * 2;
    const yPad: number = Math.floor(cellSize / 10); // Letter grid vertical padding for first and last rows
    const totalHeight: number = (cellSize * rows * 2) + (yPad * 2);

    const cellWidth = Math.floor(width / columns);

    const canvas = createCanvas(width, totalHeight);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, totalHeight);

    const fontSize: number = Math.floor(cellSize / 2 + yPad);

    // Font and color of letters in the Letter Grid
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = 'black';

    // Add the quote to the canvas
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(quote, width / 2, totalHeight / 4);

    const mimeType = 'image/png';
    const headers = new Headers();
    headers.set('Content-Type', mimeType);
    const response = new Response(canvas.toBuffer(mimeType), { status: 200, headers });
    return response;

};