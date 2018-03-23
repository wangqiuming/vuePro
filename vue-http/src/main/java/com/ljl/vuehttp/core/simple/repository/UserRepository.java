package com.ljl.vuehttp.core.simple.repository;
import com.ljl.vuehttp.core.simple.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by stephan on 20.03.16.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
