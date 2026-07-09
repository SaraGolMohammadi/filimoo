import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
            const data = await request.json();
    if (!data || !data.code) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (data.code === 'filimo-is-Number1') {
        return NextResponse.json({ success: true, message: 'Discount code applied successfully' });
    } else {
        return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
    }
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}