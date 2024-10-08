package ch.profitracker.service;

import ch.profitracker.model.User;

public interface UserService {
    User findByEmail(String email);
    User saveUser(User user);
}
