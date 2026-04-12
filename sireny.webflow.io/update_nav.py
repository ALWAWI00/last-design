import os

file_path = "index.html"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Update logo
new_content = lines[:65]
new_content.append('                <div class="nav-content-block"><a href="/" aria-label="Brand Logo Link" aria-current="page" class="site-logo-link w-inline-block w--current" style="display: flex; align-items: center; gap: 8px; text-decoration: none;"><img loading="lazy" src="https://cdn.prod.website-files.com/68fbd33cd97f330ee31625d9/690974dcae58867aae3dbc7f_Logo.svg" alt="Medifli Logo" class="site-logo"/><h2 style="margin: 0; color: white; font-size: 24px; font-weight: 700; line-height: 1;">Medifli</h2></a>\n')
new_content.extend(lines[66:95])

# Update buttons
btn_str = """                        <div class="nav-button-wrapper" style="display: flex; gap: 12px; align-items: center;">
                            <style>
                                .modern-nav-btn {
                                    text-decoration: none !important;
                                    font-weight: 500 !important;
                                    font-size: 16px !important;
                                    padding: 10px 24px !important;
                                    border-radius: 50px !important;
                                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
                                    display: inline-block !important;
                                    cursor: pointer;
                                }
                                .modern-nav-btn.login-btn {
                                    color: #fff !important;
                                    background-color: transparent !important;
                                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                                }
                                .modern-nav-btn.login-btn:hover {
                                    background-color: rgba(255, 255, 255, 0.1) !important;
                                    border-color: rgba(255, 255, 255, 0.4) !important;
                                    transform: translateY(-2px) !important;
                                }
                                .modern-nav-btn.signup-btn {
                                    color: #000 !important;
                                    background-color: #fff !important;
                                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
                                }
                                .modern-nav-btn.signup-btn:hover {
                                    transform: translateY(-2px) !important;
                                    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2) !important;
                                }
                            </style>
                            <a href="/log-in" class="modern-nav-btn login-btn">Log In</a>
                            <a href="/sign-up" class="modern-nav-btn signup-btn">Sign Up</a>
                        </div>\n"""
new_content.append(btn_str)
new_content.extend(lines[291:])

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(new_content)

print("Navigation updated successfully!")
