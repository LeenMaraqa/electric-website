export function handleLogout() {
    // Clear user session
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    // Redirect to login page
    window.location.href = '/login';
  }
