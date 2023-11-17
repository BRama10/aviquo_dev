import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  const result = await prisma.user.findUnique({where: { email }});

  if (result == null) {
    return NextResponse.json({status : 'fail'});
  } else {
    return NextResponse.json({status : 'success', ...result});
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const result = await prisma.user.create({data: request.body});
  
  return NextResponse.json(result);
}