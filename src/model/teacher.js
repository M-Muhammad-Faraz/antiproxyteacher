import axios from "axios";
export class teacher {
  constructor(teacher_uid, teacher_name, teacher_email, teacher_phone) {
    this.teacher_uid = teacher_uid;
    this.teacher_name = teacher_name;
    this.teacher_email = teacher_email;
    this.teacher_phone = teacher_phone;
  }

  getTeacherInfo() {
    return {
      teacher_uid: this.teacher_uid,
      teacher_name: this.teacher_name,
      teacher_email: this.teacher_email,
      teacher_phone: this.teacher_phone,
    };
  }
}

export class teacherAccount {
  constructor(teacher_name, teacher_email, teacher_phone, teacher_password) {
    this.teacher_name = teacher_name;
    this.teacher_email = teacher_email;
    this.teacher_phone = teacher_phone;
    this.teacher_password = teacher_password;
  }

  RegisterTeacher() {
    const creds = {
      teacher_name: this.teacher_name,
      teacher_email: this.teacher_email,
      teacher_phone: this.teacher_phone,
      teacher_password: this.teacher_password,
    };
    return axios.post("http://localhost:8000/register-new-teacher", creds, {
      headers: { "content-type": "application/json" },
    });
  }
}
