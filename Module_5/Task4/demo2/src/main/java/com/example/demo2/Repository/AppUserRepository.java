package com.example.demo2.Repository;

import com.example.demo2.Entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository <AppUser,Long> {
        AppUser findByUserName(String userName);
}
