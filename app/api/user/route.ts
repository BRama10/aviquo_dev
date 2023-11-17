import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (email) {
    const result  = await prisma.user.findUnique({where: { email }});

    if (result != null) {
      return NextResponse.json({status : 'success', ...result});
    }
  }

  return NextResponse.json({status : 'fail'});
}

export async function POST(request: Request): Promise<NextResponse> {
  if (request.body) {
    const body = await request.json();
    const result = await prisma.user.create({data: body});

    return NextResponse.json(result);
  } else {
    return NextResponse.json({status : 'fail'});
  }
}

export async function PUT(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (request.body) {
    const body = await request.json();
    const result = await prisma.user.update({
      where: {
        email: email!,
      },
      data: {
        ...body,
        email: email,
      }
    })

    return NextResponse.json({status : 'success', result});
  }
  return NextResponse.json({status : 'fail'});
}