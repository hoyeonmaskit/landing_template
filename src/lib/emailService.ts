// /src/lib/emailService.ts
import nodemailer from 'nodemailer';

// 간단한 메모리 기반 이메일 로그 저장
// 실제 프로덕션 환경에서는 데이터베이스에 저장해야 함
const emailLogs: Array<{
  timestamp: string;
  recipient: string;
  subject: string;
  status: string;
  data?: Record<string, any>;
}> = [];

// Gmail SMTP 트랜스포터 생성
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD, // Gmail 비밀번호(앱 비밀번호)
  },
});

// 이메일 로그 가져오기
export async function getEmailLogs() {
  return { 
    success: true, 
    logs: emailLogs.slice(-50) // 최근 50개 로그만 반환
  };
}

export async function sendBetaSignupNotification(data: Record<string, any>) {
  try {
    // 관리자에게 알림 이메일
    const adminMailOptions = {
      from: `"Qless Space" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[Qless Space] 새로운 베타 파트너 신청 - ${data.spaceName}`,
      text: `
        새로운 베타 파트너 신청이 접수되었습니다.
        
        공간 유형: ${data.spaceType}
        공간명: ${data.spaceName}
        대표자명: ${data.ownerName}
        이메일: ${data.email}
        연락처: ${data.phone}
        현재 관리 방식: ${data.currentSystem}
        월 평균 예약 건수: ${data.monthlyBookings}
        티켓 판매 여부: ${data.ticketSales}
        주요 문제점: ${data.painPoints}
        
        신청 시간: ${new Date().toLocaleString('ko-KR')}
      `,
      html: `
        <h2>새로운 베타 파트너 신청이 접수되었습니다</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>공간 유형</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.spaceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>공간명</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.spaceName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>대표자명</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.ownerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>이메일</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>연락처</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>현재 관리 방식</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.currentSystem}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>월 평균 예약 건수</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.monthlyBookings}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>티켓 판매 여부</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.ticketSales}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>주요 문제점</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.painPoints}</td>
          </tr>
        </table>
        <p>신청 시간: ${new Date().toLocaleString('ko-KR')}</p>
      `
    };

    // 로그에 관리자 이메일 추가
    emailLogs.push({
      timestamp: new Date().toISOString(),
      recipient: process.env.ADMIN_EMAIL || '',
      subject: `[Qless Space] 새로운 베타 파트너 신청 - ${data.spaceName}`,
      status: '전송 시도',
      data: data
    });

    // 신청자에게 확인 이메일
    const userMailOptions = {
      from: `"Qless Space" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: '[Qless Space] 베타 파트너 신청이 접수되었습니다',
      text: `
        안녕하세요, ${data.ownerName}님!
        
        Qless Space 베타 파트너 신청이 성공적으로 접수되었습니다.
        곧 담당자가 연락드릴 예정입니다.
        
        신청 정보:
        공간명: ${data.spaceName}
        공간 유형: ${data.spaceType}
        
        문의사항이 있으시면 언제든지 이 이메일로 회신해주세요.
        
        감사합니다.
        Qless Space 팀 드림
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">베타 파트너 신청이 접수되었습니다</h2>
          <p>안녕하세요, <strong>${data.ownerName}</strong>님!</p>
          <p>Qless Space 베타 파트너 신청이 성공적으로 접수되었습니다.<br>곧 담당자가 연락드릴 예정입니다.</p>
          
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 24px 0;">
            <h3 style="margin-top: 0; color: #111827;">신청 정보</h3>
            <p><strong>공간명:</strong> ${data.spaceName}<br>
            <strong>공간 유형:</strong> ${data.spaceType}</p>
          </div>
          
          <p>문의사항이 있으시면 언제든지 이 이메일로 회신해주세요.</p>
          
          <p style="margin-top: 32px;">감사합니다.<br>
          <strong>Qless Space 팀</strong> 드림</p>
        </div>
      `
    };

    // 이메일 발송
    const [adminRes, userRes] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    // 로그에 사용자 이메일 추가
    emailLogs.push({
      timestamp: new Date().toISOString(),
      recipient: data.email,
      subject: '[Qless Space] 베타 파트너 신청이 접수되었습니다',
      status: '전송 성공',
      data: {
        spaceName: data.spaceName,
        spaceType: data.spaceType,
        ownerName: data.ownerName
      }
    });

    return { 
      success: true,
      adminMessageId: adminRes.messageId,
      userMessageId: userRes.messageId
    };
  } catch (error) {
    console.error('Error sending email notification:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}