// /src/app/api/submit-beta/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';
import { sendBetaSignupNotification } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 필수 필드 검증
    const requiredFields = ['spaceType', 'spaceName', 'ownerName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `필수 항목이 누락되었습니다: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // 스프레드시트에 데이터 추가
    const sheetResult = await appendToSheet(data);
    if (!sheetResult.success) {
      return NextResponse.json(
        { success: false, error: sheetResult.error },
        { status: 500 }
      );
    }
    
    // 이메일 알림 전송
    const emailResult = await sendBetaSignupNotification(data);
    if (!emailResult.success) {
      console.warn('Email notification failed, but data was recorded:', emailResult.error);
      // 이메일 실패해도 스프레드시트에 저장되었으면 성공으로 처리할 수 있음
    }
    
    return NextResponse.json({ 
      success: true,
      message: '베타 파트너 신청이 성공적으로 접수되었습니다.'
    });
  } catch (error) {
    console.error('Error processing beta signup:', error);
    return NextResponse.json(
      { success: false, error: '신청 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}