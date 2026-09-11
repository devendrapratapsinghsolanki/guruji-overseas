import { Resend } from "resend";
import { InquiryRecord } from "@/types/inquiry";
import { COMPANY_INFO } from "@/data/company";

// Lazy-initialize Resend to prevent startup errors if API key is not configured in local dev
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === "" || apiKey === "re_your_api_key_here") {
    return null;
  }
  return new Resend(apiKey);
}

const EMAIL_FROM = process.env.EMAIL_FROM || "Guruji Overseas <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || COMPANY_INFO.contact.email || "gurujioverseasrtk@gmail.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://gururoverseas.in";

/**
 * Send professional HTML notification email to Guruji Overseas Admin/Business inbox
 */
export async function sendAdminInquiryNotification(
  inquiry: InquiryRecord
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();
    const adminDetailUrl = `${APP_URL}/admin/inquiries/${inquiry.id}`;
    const formattedDate = new Date(inquiry.createdAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const servicesHtml = inquiry.services
      .map(
        (s) =>
          `<span style="display:inline-block; background-color:#eff6ff; color:#1d4ed8; font-weight:600; font-size:12px; padding:4px 10px; border-radius:6px; margin:2px 4px 2px 0; border:1px solid #bfdbfe;">${s}</span>`
      )
      .join(" ");

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry - ${inquiry.name}</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" style="max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); border:1px solid #e2e8f0;">
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#0b1528; padding:32px 24px; text-align:center;">
              <span style="color:#f59e0b; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; display:block; margin-bottom:4px;">GURUJI OVERSEAS CRM NOTIFICATION</span>
              <h1 style="color:#ffffff; margin:0; font-size:22px; font-weight:800; letter-spacing:-0.5px;">New Website Inquiry Received</h1>
              <p style="color:#94a3b8; margin:6px 0 0 0; font-size:13px;">Inquiry Ref: <strong style="color:#ffffff;">${inquiry.id}</strong></p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 24px;">
              <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:24px;">
                <table width="100%" cellspacing="0" cellpadding="8" style="font-size:14px;">
                  <tr>
                    <td width="35%" style="color:#64748b; font-weight:600;">Full Name:</td>
                    <td style="color:#0f172a; font-weight:700; font-size:15px;">${inquiry.name}</td>
                  </tr>
                  <tr>
                    <td style="color:#64748b; font-weight:600;">Phone Number:</td>
                    <td>
                      <a href="tel:${inquiry.phone}" style="color:#2563eb; font-weight:700; text-decoration:none;">${inquiry.phone}</a>
                      <span style="color:#94a3b8; font-size:12px; margin-left:8px;">(<a href="https://wa.me/91${inquiry.phone.replace(/\\D/g, "")}" style="color:#16a34a; text-decoration:none; font-weight:600;">WhatsApp</a>)</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#64748b; font-weight:600;">Email Address:</td>
                    <td>
                      <a href="mailto:${inquiry.email}" style="color:#2563eb; text-decoration:none; font-weight:600;">${inquiry.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#64748b; font-weight:600;">Submitted At:</td>
                    <td style="color:#334155;">${formattedDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Services Selection -->
              <div style="margin-bottom:24px;">
                <h3 style="margin:0 0 10px 0; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#475569;">Selected Services &amp; Interests:</h3>
                <div>
                  ${servicesHtml}
                </div>
              </div>

              <!-- Message / Notes -->
              ${
                inquiry.message
                  ? `
              <div style="margin-bottom:28px;">
                <h3 style="margin:0 0 8px 0; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#475569;">Student Message / Query:</h3>
                <div style="background-color:#fffbeb; border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0; color:#1e293b; font-style:italic; font-size:14px; line-height:1.5;">
                  &ldquo;${inquiry.message}&rdquo;
                </div>
              </div>
              `
                  : ""
              }

              <!-- Call To Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;">
                <tr>
                  <td align="center">
                    <a href="${adminDetailUrl}" target="_blank" style="display:inline-block; background-color:#2563eb; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:14px 28px; border-radius:10px; box-shadow:0 2px 4px rgba(37,99,235,0.3);">
                      View Inquiry in Admin Dashboard →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background-color:#f8fafc; padding:20px 24px; border-top:1px solid #e2e8f0; text-align:center; font-size:12px; color:#94a3b8;">
              <p style="margin:0 0 4px 0;">${COMPANY_INFO.legalName} • Rohtak Operational Headquarters</p>
              <p style="margin:0;">Helpline: ${COMPANY_INFO.contact.displayPhone} • Email: ${COMPANY_INFO.contact.email}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    if (!resend) {
      console.log("ℹ️ [EMAIL DISPATCH - SIMULATED (RESEND_API_KEY unset)]");
      console.log(`To: ${ADMIN_EMAIL}`);
      console.log(`Subject: New Website Inquiry - ${inquiry.name}`);
      return { success: true };
    }

    const response = await resend.emails.send({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: `New Website Inquiry - ${inquiry.name}`,
      html: htmlContent,
      replyTo: inquiry.email,
    });

    if (response.error) {
      console.error("[Resend Admin Notification Error]:", response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown email dispatch error";
    console.error("[Email Notification Exception]:", errorMsg);
    return { success: false, error: errorMsg };
  }
}

/**
 * Send an acknowledgement email to the visitor after form submission
 */
export async function sendVisitorAcknowledgement(
  inquiry: InquiryRecord
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient();
    const servicesList = inquiry.services.join(", ");

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Guruji Overseas</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" style="max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); border:1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0b1528; padding:32px 24px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:22px; font-weight:800;">Guruji Overseas</h1>
              <p style="color:#f59e0b; margin:6px 0 0 0; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Study Abroad &amp; Test Preparation Consultancy</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 24px; font-size:14px; line-height:1.6; color:#334155;">
              <p style="margin-top:0; font-size:15px; font-weight:600; color:#0f172a;">Hello ${inquiry.name},</p>
              
              <p>Thank you for reaching out to <strong>Guruji Overseas</strong>.</p>
              
              <p>We have successfully received your enquiry regarding:</p>
              <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px 16px; margin:16px 0; color:#1e293b; font-weight:600;">
                ${servicesList}
              </div>

              <p>Our counselling team will review your enquiry and get in touch with you shortly via phone or email to assist with your abroad study goals.</p>

              <div style="margin-top:28px; padding-top:20px; border-top:1px solid #e2e8f0;">
                <p style="margin:0; font-weight:600; color:#0f172a;">Warm regards,</p>
                <p style="margin:2px 0 0 0; color:#64748b;"><strong>Admissions &amp; Counselling Team</strong><br/>Guruji Overseas (Rohtak HQ)</p>
                <p style="margin:8px 0 0 0; font-size:13px;">
                  📞 Helpline: <a href="tel:${COMPANY_INFO.contact.primaryPhone.replace(/\\s+/g, "")}" style="color:#2563eb; text-decoration:none;">${COMPANY_INFO.contact.primaryPhone}</a> | 
                  🌐 Website: <a href="${APP_URL}" style="color:#2563eb; text-decoration:none;">gururoverseas.in</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc; padding:16px 24px; border-top:1px solid #e2e8f0; text-align:center; font-size:11px; color:#94a3b8;">
              <p style="margin:0;">${COMPANY_INFO.legalName} • ${COMPANY_INFO.location.addressLine1}, ${COMPANY_INFO.location.cityStateZip}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    if (!resend) {
      console.log(`ℹ️ [VISITOR ACKNOWLEDGEMENT - SIMULATED] To: ${inquiry.email}`);
      return { success: true };
    }

    const response = await resend.emails.send({
      from: EMAIL_FROM,
      to: inquiry.email,
      subject: "Thank you for contacting Guruji Overseas",
      html: htmlContent,
    });

    if (response.error) {
      console.error("[Resend Visitor Ack Error]:", response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown visitor email error";
    console.error("[Visitor Acknowledgement Exception]:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
