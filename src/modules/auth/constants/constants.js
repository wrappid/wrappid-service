const constant = {
  entityStatus: {
    // UNKNOWN:0,
    // NEW: 1,
    // ACTIVE: 2,
    // INACTIVE: 3,
    // DELETED: 4,
    DEFAULT: "active",
    UNKNOWN: "unknown",
    NEW: "new",
    ACTIVE: "active",
    INACTIVE: "inactive",
    DELETED: "deleted",
    COMPLETED: "completed",
    CURRENT: "current",
    RESCHEDULED: "rescheduled ",
    ONHOLD: "on_hold",
    SENT: "sent",
    SENT_FAILED: "sent_failed",
    // For Communication template
    DRAFT: "draft",
    REVIEW_REQUESTED: "review_requested",
    APPROVED: "approved",
    REJECTED: "rejected",
    PENDING: "pending",
    PUBLISHED: "published",
    CHANGE_REQUESTED: "change_requested",
    TERMINATED: "terminated",
  },

  httpMethod: {
    HTTP_GET: "get",
    HTTP_POST: "post",
    HTTP_PUT: "put",
    HTTP_PATCH: "patch",
  },

  userRoles: {
    ROLE_SYSTEM_ADMIN: "system_admin",
    ROLE_ONBOARDING_SALESFORCE: "onboarding_salesforce",
    ROLE_ONBOARDING_BACK_OFFICE: "onboarding_back_office",
    ROLE_PATIENT_BACK_OFFICE: "patient_back_office",
    ROLE_DOCTOR: "doctor",
    ROLE_ASSISTANT: "assistant",
    ROLE_PATIENT: "patient",
  },

  contact: {
    EMAIL: "email",
    PHONE: "phone",
  },

  communication: {
    EMAIL: "email",
    SMS: "sms",
    WHATSAPP: "whatsapp",
    NOTIFICATION: "notification",
    SENT_OTP_MAIL_EN: "sent_otp_mail_en",
    SENT_OTP_SMS_EN: "sent_otp_sms_en",
    SENT_PRESCRIPTION_MAIL: "sent_prescription_mail",
    SENT_PRESCRIPTION_WHATSAPP: "share_prescription_whatsapp_en",
    ADD_USER_NOTIFICATION_MAIL: "add_user_notification_mail",
    SENT_ASSISTANT_INVITATION: "sent_assistant_invitation",
  },

  __RouteSource: {
    CLIENT_SIDE: "client-side",
    SERVER_SIDE: "server-side",
  },

  nodeEnv: {
    NODE_DEV_ENV: "development",
    NODE_TEST_ENV: "test",
    NODE_PROD_ENV: "production",
  },

  routes: {
    DOCTOR_INVITATIONS: "invitations/doctor",
  },

  relation: {
    ASSISTANT: "Assistant",
  },

  communicationContentType: {
    mail: {
      HTML: "text/html",
      TEXT: "text/plain",
    },
  },
};

module.exports = constant;
