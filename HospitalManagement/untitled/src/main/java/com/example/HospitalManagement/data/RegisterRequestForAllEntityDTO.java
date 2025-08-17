package com.example.HospitalManagement.data;

import com.example.HospitalManagement.enums.Category;
import com.example.HospitalManagement.enums.Entity;
import com.example.HospitalManagement.enums.Status;
import lombok.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestForAllEntityDTO {
    private String firstName;
    private String lastName;

    @NotNull(message = "must.not.be.empty")
    @Email(message = "email.is.not.valid")
    private String email;

    @Size(min = 5, max =45, message = "password.min.max")
    private String password;

    private String phoneNumber;
    private String imageUrl;
    private Status status;
    private Entity role;

    //for doctor
    private Long age;
    private String gender;
    private String specialization;
    private String qualification;
    private Boolean isActive;
    private Long departmentId;
    private Long cityId;

    //for nurse
    private String description;
    private Category category;
    private Long roomId;

    //for patient
    private String street;
    private String dateOfBirth;

}
