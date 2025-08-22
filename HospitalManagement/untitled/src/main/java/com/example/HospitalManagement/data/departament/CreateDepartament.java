package com.example.HospitalManagement.data.departament;

import com.example.HospitalManagement.data.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateDepartament extends BaseDTO {

    private String departamentName;

    private String description;

    private Long departamentSize;

    private String departamentStatus;
}
