const CLASSROOMACTIONS = { join: "JOIN", left: "LEFT" };
export class Classroom {
  constructor(
    course_code,
    lecture_id,
    course_name,
    time_slot,
    teacher_id,
    teacher_name,

    list_of_student
  ) {
    this.course_code = course_code;
    this.lecture_id = lecture_id;

    this.course_name = course_name;
    this.time_slot = time_slot;
    this.teacher_id = teacher_id;
    this.teacher_name = teacher_name;
    this.total_students = list_of_student;
    this.attendees = [];
    this.absentees = [...this.total_students];
    this.exceptions = [];
    this.notification = [];
  }

  updateLists(student, action) {
    if (action === CLASSROOMACTIONS.join) {
      this.attendees.push(student);
      this.absentees = this.absentees.filter((stud) => {
        return stud.stud_id !== student.stud_id;
      });
    } else {
      this.exceptions.push(student);
      this.attendees = this.attendees.filter((stud) => {
        return stud.stud_id !== student.stud_id;
      });
    }
  }
  getLists() {
    return {
      attendees: this.attendees,
      absentees: this.absentees,
      exceptions: this.exceptions,
    };
  }
}
