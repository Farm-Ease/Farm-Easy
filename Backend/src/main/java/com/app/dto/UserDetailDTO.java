package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetailDTO {
	@NotNull
    private Long id;

    @NotBlank
    @Email
    private String email;

}
