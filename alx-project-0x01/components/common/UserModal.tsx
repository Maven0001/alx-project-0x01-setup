import { PostData, UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({onClose, onSubmit}) =>{
  const [User, setUser] = useState<PostData>({
    id: 1,
    name: "",
    username: "",

  })
  return(

  )
}