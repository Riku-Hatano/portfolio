import { NextResponse } from "next/server"

export async function GET(req: any) {
    return NextResponse.json({ message: 'reCAPTCHA verification successful' })
}

export async function POST(req: any) {
    const body = await req.json();
    const address = body.key
    console.log(req);
    return NextResponse.json({ message: `you send ${address} and it is successfully sended with POST request`})
}

// export default server;