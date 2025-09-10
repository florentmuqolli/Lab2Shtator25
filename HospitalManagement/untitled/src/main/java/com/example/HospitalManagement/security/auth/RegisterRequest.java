package com.example.HospitalManagement.security.auth;

import com.example.HospitalManagement.data.BaseDTO;
import com.example.HospitalManagement.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest extends BaseDTO {

    private String firstName;
    private String lastName;

    @NotBlank(message = "must.not.be.empty")
    @Email(message = "email.is.not.valid")
    private String email;

    @Size(min = 5, max =45, message = "password.min.max")
    private String password;

    private String phoneNumber;
    private String imageUrl;
    private Status status;
    private String role;
}
