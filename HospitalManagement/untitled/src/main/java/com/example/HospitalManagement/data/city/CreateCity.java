package com.example.HospitalManagement.data.city;

import com.example.HospitalManagement.data.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateCity extends BaseDTO {
    private String name;
}
