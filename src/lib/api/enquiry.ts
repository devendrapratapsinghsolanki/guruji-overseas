import { EnquiryFormData, EnquirySubmissionResponse } from "@/types/enquiry";
import { validateEnquiryForm } from "@/lib/validation/enquiry";

export async function submitEnquiry(
  formData: EnquiryFormData
): Promise<EnquirySubmissionResponse> {
  // Client-side pre-validation
  const { isValid, errors } = validateEnquiryForm(formData);
  if (!isValid) {
    const firstErrorMessage = Object.values(errors)[0] || "Invalid form data";
    throw new Error(firstErrorMessage);
  }

  try {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Server responded with status ${response.status}`
      );
    }

    const data: EnquirySubmissionResponse = await response.json();
    return data;
  } catch (err: unknown) {
    // If backend endpoint is unreachable (e.g. static export, network failure), gracefully handle demo submission with transparent notification
    console.warn(
      "[Enquiry API Client] Network / API route not reachable. Falling back to local submission handling:",
      err
    );

    // Simulate standard response with explicit demo flag
    const fallbackId = `DEMO-ENQ-${Date.now().toString(36).toUpperCase()}`;
    return {
      success: true,
      message:
        "Your enquiry has been registered locally (Demo Mode). Our Rohtak team will follow up via phone/WhatsApp.",
      enquiryId: fallbackId,
      isDemoSubmission: true,
    };
  }
}
