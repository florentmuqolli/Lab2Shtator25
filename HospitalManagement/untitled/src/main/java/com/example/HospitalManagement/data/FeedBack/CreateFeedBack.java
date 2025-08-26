package com.example.HospitalManagement.data.FeedBack;

import com.example.HospitalManagement.entity.Doctor;
import com.example.HospitalManagement.entity.Nurse;
import com.example.HospitalManagement.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateFeedBack {
    private String comment;
    private Long rating;
    private Long doctorId;
    private Long nurseId;
    private Long userId;
    //private User user;
}
