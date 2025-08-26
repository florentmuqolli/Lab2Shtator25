package com.example.HospitalManagement.data.inventory;

import com.example.HospitalManagement.data.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateInventory extends BaseDTO {
    private String article;
    private String description;
    private Long quantity;
    private Double price;
}
