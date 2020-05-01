package pl.javastart.equipy;

public class UserMapper {

    static UserTo mapUserToUserTo(User user){
        UserTo userTo = new UserTo();
        userTo.setId(user.getId());
        userTo.setFirstName(user.getFirstName());
        userTo.setLastName(user.getLastName());
        userTo.setPesel(user.getPesel());
        return userTo;
    }


    static User mapUserToToUser(UserTo userTo){
        User user = new User();
        user.setId(userTo.getId());
        user.setFirstName(userTo.getFirstName());
        user.setLastName(userTo.getLastName());
        user.setPesel(userTo.getPesel());
        return user;
    }

}
