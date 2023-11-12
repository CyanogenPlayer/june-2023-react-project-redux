import css from './User.module.css'

const User = () => {
    return (
        <div className={css.user}>
            <img src='https://cdn.techmesto.com/wp-content/uploads/2015/11/CyanogenMod-Logo.png' alt='userPhoto'
                 className={css.userPhoto}/>
            <p className={css.userName}>Cyan</p>
        </div>
    );
};

export {
    User
}