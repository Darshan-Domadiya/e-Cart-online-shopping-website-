import { createContext, useState } from "react";
import { boolean } from "yup";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const userResultDetails = {
    avatar: null,
    avatar_url: "",
    checkout_customer_id: null,
    checkout_fastfox_payment_token: null,
    checkout_fastfox_session_id: null,
    checkout_status: null,
    country_code: "",
    created_at: "",
    csv_accept_email_marketing: 0,
    csv_accept_sms_marketing: 0,
    csv_company: null,
    csv_filename: null,
    csv_shopify_import: 0,
    csv_tags: null,
    csv_total_order: 0,
    csv_total_spent: "",
    customer_id: "",
    deleted_at: null,
    email: "",
    email_verified_at: null,
    id: null,
    is_admin_vendor: 0,
    is_block: 0,
    is_new_user: null,
    is_online: 0,
    is_update_progress: 0,
    mobile: "",
    name: "",
    next_token: "",
    role_id: 3,
    social_id: null,
    social_type: null,
    step: null,
    token: "",
    updated_at: "",
  };

  return (
    <UserContext.Provider value={{ userResultDetails, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
