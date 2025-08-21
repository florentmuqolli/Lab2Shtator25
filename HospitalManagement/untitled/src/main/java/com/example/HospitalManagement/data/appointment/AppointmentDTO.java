package com.example.HospitalManagement.data.appointment;

import com.example.HospitalManagement.enums.Status;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public  class AppointmentDTO {
    private Long appointmentId;
    private String reason;
    private LocalDateTime date;
    private String doctorName;
    private Status status;
}
