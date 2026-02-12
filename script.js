// script.js - Complete Modern Social Media Functionality
document.addEventListener('DOMContentLoaded', function() {
    // ========== DOM Elements ==========
    // Navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    const closeMobileMenu = document.querySelector('.close-mobile-menu');
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
    const closeSearch = document.querySelector('.close-search');
    
    // Notifications
    const notificationBell = document.querySelector('.notification-bell');
    const mobileNotificationsBtn = document.getElementById('mobile-notifications-btn');
    const notificationsPanel = document.getElementById('notificationsPanel');
    const closeNotifications = document.querySelector('.close-notifications');
    const markAllReadBtn = document.querySelector('.mark-all-read');
    
    // Messages
    const messagesBtn = document.getElementById('messages-btn');
    const mobileMessagesBtn = document.querySelector('.menu-item:nth-child(3)');
    const messagesPanel = document.getElementById('messagesPanel');
    const closeMessages = document.querySelector('.close-messages');
    const newMessageBtn = document.querySelector('.new-message');
    const messageSearch = document.getElementById('messageSearch');
    
    // Theme
    const themeBtn = document.getElementById('theme-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');
    const themeModal = document.getElementById('themeModal');
    const closeTheme = document.querySelector('.close-theme');
    const colorOptions = document.querySelectorAll('.color-option');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const globalDarkMode = document.getElementById('globalDarkMode');
    const densityOptions = document.querySelectorAll('.density-option');
    const resetBtn = document.querySelector('.btn-reset');
    const applyBtn = document.querySelector('.btn-apply');
    
    // Posts
    const createPostBtn = document.querySelector('.btn-create');
    const mobileCreateBtn = document.querySelector('.mobile-create-btn');
    const createPostModal = document.getElementById('createPostModal');
    const closeModal = document.querySelector('.close-modal');
    const btnCancel = document.querySelector('.btn-cancel');
    const btnPost = document.querySelector('.btn-post');
    const postBtns = document.querySelectorAll('.post-btn');
    const postTextarea = document.querySelector('.modal-body textarea');
    
    // Stories
    const stories = document.querySelectorAll('.story-card:not(.create-story)');
    const createStory = document.querySelector('.create-story');
    
    // Friend Requests
    const acceptBtns = document.querySelectorAll('.btn-accept');
    const declineBtns = document.querySelectorAll('.btn-decline');
    
    // Post Interactions
    const likeBtns = document.querySelectorAll('.like-btn');
    const saveBtns = document.querySelectorAll('.save-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const shareBtns = document.querySelectorAll('.share-btn');
    const postMenus = document.querySelectorAll('.post-menu');
    
    // Bottom Mobile Navigation
    const bottomMobileBtns = document.querySelectorAll('.mobile-nav-btn');
    const mobileCreatePostBtn = document.getElementById('mobile-create-btn');
    const mobileProfileBtn = document.getElementById('mobile-profile-btn');
    
    // Search
    const searchInputs = document.querySelectorAll('input[type="search"]');
    const searchSuggestions = document.querySelectorAll('.suggestions span');
    
    // ========== Data ==========
    let notifications = [
        {
            id: 1,
            user: 'Keke Benjamin',
            avatar: './images/profile-2.jpg',
            action: 'accepted your friend request',
            time: '2 days ago',
            read: false,
            type: 'friend'
        },
        {
            id: 2,
            user: 'John Doe',
            avatar: './images/profile-3.jpg',
            action: 'commented on your post',
            time: '4 hours ago',
            read: false,
            type: 'comment'
        },
        {
            id: 3,
            user: 'Emily Carter',
            avatar: './images/profile-4.jpg',
            action: 'liked your photo',
            time: '3 hours ago',
            read: true,
            type: 'like'
        },
        {
            id: 4,
            user: 'Rahul Sharma',
            avatar: './images/profile-5.jpg',
            action: 'started following you',
            time: '2 hours ago',
            read: true,
            type: 'follow'
        },
        {
            id: 5,
            user: 'Sophia Williams',
            avatar: './images/profile-6.jpg',
            action: 'mentioned you in a comment',
            time: '1 hour ago',
            read: true,
            type: 'mention'
        },
        {
            id: 6,
            user: 'Arjun Patel',
            avatar: './images/profile-7.jpg',
            action: 'shared your post',
            time: 'Just now',
            read: true,
            type: 'share'
        }
    ];
    
    let conversations = [
        {
            id: 1,
            user: 'Edem Ques',
            avatar: './images/profile-17.jpg',
            lastMessage: '2 new messages',
            time: '2 min',
            unread: 2,
            online: false
        },
        {
            id: 2,
            user: 'Julient Makarey',
            avatar: './images/profile-12.jpg',
            lastMessage: 'Lol u right',
            time: '1 hr',
            unread: 0,
            online: false
        },
        {
            id: 3,
            user: 'Chantel Msiza',
            avatar: './images/profile-11.jpg',
            lastMessage: 'Birthday Tomorrow!',
            time: '3 hr',
            unread: 1,
            online: true
        },
        {
            id: 4,
            user: 'Franca Deila',
            avatar: './images/profile-8.jpg',
            lastMessage: 'Received bruh Thanks!',
            time: '5 hr',
            unread: 0,
            online: false
        },
        {
            id: 5,
            user: 'Edem lol',
            avatar: './images/profile-18.jpg',
            lastMessage: 'at home ?',
            time: '1 d',
            unread: 0,
            online: true
        }
    ];
    
    let friendRequests = [
        {
            id: 1,
            user: 'Hajia Bintu',
            avatar: './images/profile-12.jpg',
            mutualFriends: 8
        },
        {
            id: 2,
            user: 'Jia Roz',
            avatar: './images/profile-7.jpg',
            mutualFriends: 2
        },
        {
            id: 3,
            user: 'Joshph Lul',
            avatar: './images/profile-9.jpg',
            mutualFriends: 1
        }
    ];
    
    let onlineFriends = [
        { name: 'Chantel', avatar: './images/profile-11.jpg' },
        { name: 'Edem', avatar: './images/profile-18.jpg' },
        { name: 'Franca', avatar: './images/profile-8.jpg' },
        { name: 'Julient', avatar: './images/profile-17.jpg' }
    ];
    
    // ========== State Management ==========
    let currentTheme = localStorage.getItem('nokoTheme') || 'blue';
    let isDarkMode = localStorage.getItem('nokoDarkMode') === 'true';
    let currentDensity = localStorage.getItem('nokoDensity') || 'comfortable';
    
    // ========== Initialize ==========
    init();
    
    function init() {
        // Load saved preferences
        loadPreferences();
        
        // Initialize UI
        renderNotifications();
        renderConversations();
        updateNotificationBadge();
        
        // Setup event listeners
        setupEventListeners();
        
        // Apply initial theme
        applyTheme();
    }
    
    function setupEventListeners() {
        // Mobile Navigation
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        closeMobileMenu.addEventListener('click', toggleMobileMenu);
        mobileSearchBtn.addEventListener('click', toggleMobileSearch);
        closeSearch.addEventListener('click', toggleMobileSearch);
        
        // Notifications
        notificationBell.addEventListener('click', toggleNotifications);
        mobileNotificationsBtn.addEventListener('click', toggleNotifications);
        closeNotifications.addEventListener('click', toggleNotifications);
        markAllReadBtn.addEventListener('click', markAllNotificationsRead);
        
        // Messages
        messagesBtn.addEventListener('click', toggleMessages);
        mobileMessagesBtn.addEventListener('click', toggleMessages);
        closeMessages.addEventListener('click', toggleMessages);
        newMessageBtn.addEventListener('click', startNewMessage);
        messageSearch.addEventListener('input', searchMessages);
        
        // Theme
        themeBtn.addEventListener('click', openThemeModal);
        mobileThemeBtn.addEventListener('click', openThemeModal);
        closeTheme.addEventListener('click', closeThemeModal);
        themeModal.addEventListener('click', function(e) {
            if (e.target === themeModal) closeThemeModal();
        });
        
        colorOptions.forEach(option => {
            option.addEventListener('click', () => selectColorTheme(option.dataset.color));
        });
        
        darkModeToggle.addEventListener('change', toggleDarkMode);
        globalDarkMode.addEventListener('change', toggleGlobalDarkMode);
        
        densityOptions.forEach(option => {
            option.addEventListener('click', () => selectDensity(option.textContent));
        });
        
        resetBtn.addEventListener('click', resetTheme);
        applyBtn.addEventListener('click', applyThemeChanges);
        
        // Posts
        createPostBtn.addEventListener('click', openCreatePostModal);
        mobileCreateBtn.addEventListener('click', openCreatePostModal);
        mobileCreatePostBtn.addEventListener('click', openCreatePostModal);
        closeModal.addEventListener('click', closeCreatePostModal);
        btnCancel.addEventListener('click', closeCreatePostModal);
        btnPost.addEventListener('click', createPost);
        createPostModal.addEventListener('click', function(e) {
            if (e.target === createPostModal) closeCreatePostModal();
        });
        
        postBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const postInput = this.closest('.create-post-card').querySelector('input');
                if (postInput.value.trim()) {
                    createQuickPost(postInput.value);
                    postInput.value = '';
                } else {
                    showToast('Please write something to post!', 'error');
                }
            });
        });
        
        // Stories
        createStory.addEventListener('click', createNewStory);
        stories.forEach(story => {
            story.addEventListener('click', viewStory);
        });
        
        // Friend Requests
        acceptBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => acceptFriendRequest(index));
        });
        
        declineBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => declineFriendRequest(index));
        });
        
        // Post Interactions
        likeBtns.forEach(btn => {
            btn.addEventListener('click', toggleLike);
        });
        
        saveBtns.forEach(btn => {
            btn.addEventListener('click', toggleSave);
        });
        
        commentBtns.forEach(btn => {
            btn.addEventListener('click', focusCommentInput);
        });
        
        shareBtns.forEach(btn => {
            btn.addEventListener('click', sharePost);
        });
        
        postMenus.forEach(menu => {
            menu.addEventListener('click', togglePostMenu);
        });
        
        // Bottom Mobile Navigation
        bottomMobileBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (!this.classList.contains('active')) {
                    bottomMobileBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update main nav
                    const navIcons = document.querySelectorAll('.nav-icon');
                    navIcons.forEach(icon => icon.classList.remove('active'));
                    
                    // Scroll to section
                    const section = this.getAttribute('href');
                    if (section) {
                        e.preventDefault();
                        document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
        
        mobileProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Profile page coming soon!', 'info');
        });
        
        // Search
        searchInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
        
        searchSuggestions.forEach(suggestion => {
            suggestion.addEventListener('click', function() {
                const searchTerm = this.textContent;
                searchInputs.forEach(input => input.value = searchTerm);
                showToast(`Searching for ${searchTerm}...`, 'info');
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Escape key closes modals
            if (e.key === 'Escape') {
                closeAllModals();
            }
            
            // Ctrl/Cmd + / for search
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                searchInputs[0]?.focus();
            }
            
            // Ctrl/Cmd + N for new post
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                openCreatePostModal();
            }
        });
        
        // Window resize handling
        window.addEventListener('resize', handleResize);
    }
    
    // ========== Mobile Navigation ==========
    function toggleMobileMenu() {
        mobileNavMenu.classList.toggle('active');
        document.body.style.overflow = mobileNavMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    function toggleMobileSearch() {
        mobileSearchOverlay.style.display = 
            mobileSearchOverlay.style.display === 'flex' ? 'none' : 'flex';
        document.body.style.overflow = 
            mobileSearchOverlay.style.display === 'flex' ? 'hidden' : '';
    }
    
    // ========== Notifications ==========
    function toggleNotifications() {
        notificationsPanel.classList.toggle('show');
        if (notificationsPanel.classList.contains('show')) {
            // Mark as read when opened
            notifications.forEach(n => n.read = true);
            updateNotificationBadge();
            renderNotifications();
        }
    }
    
    function markAllNotificationsRead() {
        notifications.forEach(notification => notification.read = true);
        updateNotificationBadge();
        renderNotifications();
        showToast('All notifications marked as read', 'success');
    }
    
    function updateNotificationBadge() {
        const unreadCount = notifications.filter(n => !n.read).length;
        const badges = document.querySelectorAll('.badge, .mobile-badge');
        
        badges.forEach(badge => {
            if (unreadCount > 0) {
                badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
                badge.style.display = 'block';
            } else {
                badge.style.display = 'none';
            }
        });
    }
    
    function renderNotifications() {
        const notificationsList = document.querySelector('.notifications-list');
        if (!notificationsList) return;
        
        notificationsList.innerHTML = notifications.map(notification => `
            <div class="notification-item ${notification.read ? '' : 'unread'}" data-id="${notification.id}">
                <img src="${notification.avatar}" alt="${notification.user}">
                <div class="notification-content">
                    <p><strong>${notification.user}</strong> ${notification.action}</p>
                    <span class="notification-time">${notification.time}</span>
                </div>
                <div class="notification-action">
                    <button class="notification-mark-read">
                        <i class="uil uil-check"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners to mark as read buttons
        document.querySelectorAll('.notification-mark-read').forEach(btn => {
            btn.addEventListener('click', function() {
                const notificationId = parseInt(this.closest('.notification-item').dataset.id);
                markNotificationAsRead(notificationId);
            });
        });
    }
    
    function markNotificationAsRead(id) {
        const notification = notifications.find(n => n.id === id);
        if (notification && !notification.read) {
            notification.read = true;
            updateNotificationBadge();
            renderNotifications();
        }
    }
    
    // ========== Messages ==========
    function toggleMessages() {
        messagesPanel.classList.toggle('show');
    }
    
    function renderConversations() {
        const conversationsList = document.querySelector('.conversations-list');
        if (!conversationsList) return;
        
        conversationsList.innerHTML = conversations.map(convo => `
            <div class="conversation ${convo.unread > 0 ? 'unread' : ''}" data-id="${convo.id}">
                <div class="conversation-avatar">
                    <img src="${convo.avatar}" alt="${convo.user}">
                    ${convo.online ? '<div class="online-dot"></div>' : ''}
                </div>
                <div class="conversation-info">
                    <h4>${convo.user}</h4>
                    <p>${convo.lastMessage}</p>
                </div>
                <div class="conversation-meta">
                    <span class="conversation-time">${convo.time}</span>
                    ${convo.unread > 0 ? `<span class="conversation-unread">${convo.unread}</span>` : ''}
                </div>
            </div>
        `).join('');
        
        // Add event listeners to conversations
        document.querySelectorAll('.conversation').forEach(convo => {
            convo.addEventListener('click', function() {
                const convoId = parseInt(this.dataset.id);
                openConversation(convoId);
            });
        });
    }
    
    function searchMessages() {
        const searchTerm = messageSearch.value.toLowerCase();
        const conversations = document.querySelectorAll('.conversation');
        
        conversations.forEach(convo => {
            const name = convo.querySelector('h4').textContent.toLowerCase();
            convo.style.display = name.includes(searchTerm) ? 'flex' : 'none';
        });
    }
    
    function startNewMessage() {
        showToast('New message feature coming soon!', 'info');
    }
    
    function openConversation(id) {
        const conversation = conversations.find(c => c.id === id);
        if (conversation) {
            conversation.unread = 0;
            renderConversations();
            showToast(`Opening chat with ${conversation.user}`, 'info');
        }
    }
    
    // ========== Theme Management ==========
    function loadPreferences() {
        // Load from localStorage
        const savedTheme = localStorage.getItem('nokoTheme');
        const savedDarkMode = localStorage.getItem('nokoDarkMode');
        const savedDensity = localStorage.getItem('nokoDensity');
        
        if (savedTheme) currentTheme = savedTheme;
        if (savedDarkMode !== null) isDarkMode = savedDarkMode === 'true';
        if (savedDensity) currentDensity = savedDensity;
        
        // Update UI
        updateThemeUI();
    }
    
    function updateThemeUI() {
        // Update color theme
        colorOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.color === currentTheme);
        });
        
        // Update dark mode toggles
        darkModeToggle.checked = isDarkMode;
        globalDarkMode.checked = isDarkMode;
        
        // Update density
        densityOptions.forEach(option => {
            option.classList.toggle('active', option.textContent.toLowerCase() === currentDensity);
        });
    }
    
    function openThemeModal() {
        themeModal.classList.add('show');
    }
    
    function closeThemeModal() {
        themeModal.classList.remove('show');
    }
    
    function selectColorTheme(color) {
        currentTheme = color;
        updateThemeUI();
    }
    
    function toggleDarkMode() {
        isDarkMode = darkModeToggle.checked;
        globalDarkMode.checked = isDarkMode;
        applyTheme();
    }
    
    function toggleGlobalDarkMode() {
        isDarkMode = globalDarkMode.checked;
        darkModeToggle.checked = isDarkMode;
        applyTheme();
    }
    
    function selectDensity(density) {
        currentDensity = density.toLowerCase();
        densityOptions.forEach(option => {
            option.classList.toggle('active', option.textContent.toLowerCase() === currentDensity);
        });
    }
    
    function resetTheme() {
        currentTheme = 'blue';
        isDarkMode = true;
        currentDensity = 'comfortable';
        updateThemeUI();
        applyTheme();
        showToast('Theme reset to default', 'success');
    }
    
    function applyThemeChanges() {
        savePreferences();
        applyTheme();
        closeThemeModal();
        showToast('Theme applied successfully!', 'success');
    }
    
    function savePreferences() {
        localStorage.setItem('nokoTheme', currentTheme);
        localStorage.setItem('nokoDarkMode', isDarkMode);
        localStorage.setItem('nokoDensity', currentDensity);
    }
    
    function applyTheme() {
        const root = document.documentElement;
        
        // Apply dark mode
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
        
        // Apply color theme
        const themeColors = {
            blue: { primary: '#3b82f6', secondary: '#8b5cf6' },
            purple: { primary: '#8b5cf6', secondary: '#a78bfa' },
            green: { primary: '#10b981', secondary: '#34d399' },
            red: { primary: '#ef4444', secondary: '#f87171' },
            orange: { primary: '#f59e0b', secondary: '#fbbf24' }
        };
        
        const colors = themeColors[currentTheme] || themeColors.blue;
        root.style.setProperty('--accent-primary', colors.primary);
        root.style.setProperty('--accent-secondary', colors.secondary);
        
        // Apply density
        const densities = {
            compact: { spacing: '0.75rem', padding: '0.5rem' },
            comfortable: { spacing: '1rem', padding: '0.75rem' },
            spacious: { spacing: '1.25rem', padding: '1rem' }
        };
        
        const density = densities[currentDensity] || densities.comfortable;
        root.style.setProperty('--spacing-md', density.spacing);
        root.style.setProperty('--card-padding', density.padding);
    }
    
    // ========== Posts ==========
    function openCreatePostModal() {
        createPostModal.classList.add('show');
        postTextarea.focus();
    }
    
    function closeCreatePostModal() {
        createPostModal.classList.remove('show');
        postTextarea.value = '';
    }
    
    function createPost() {
        const content = postTextarea.value.trim();
        if (content) {
            // In a real app, this would send data to server
            const newPost = {
                id: Date.now(),
                user: 'Harshi',
                avatar: './image/bg1.jpg',
                content: content,
                time: 'Just now',
                likes: 0,
                comments: 0,
                shares: 0
            };
            
            // Add to feed
            addPostToFeed(newPost);
            
            // Close modal and show success message
            closeCreatePostModal();
            showToast('Post created successfully!', 'success');
            
            // Simulate API call
            simulateAPICall('Creating post...', 1000);
        } else {
            showToast('Please write something to post!', 'error');
        }
    }
    
    function createQuickPost(content) {
        const newPost = {
            id: Date.now(),
            user: 'Harshii',
            avatar: './image/bg1.jpg',
            content: content,
            time: 'Just now',
            likes: 0,
            comments: 0,
            shares: 0
        };
        
        addPostToFeed(newPost);
        showToast('Posted!', 'success');
    }
    
    function addPostToFeed(post) {
        const feedPosts = document.querySelector('.feed-posts');
        if (!feedPosts) return;
        
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-author">
                    <img src="${post.avatar}" alt="${post.user}">
                    <div>
                        <h4>${post.user}</h4>
                        <p>${post.time}</p>
                    </div>
                </div>
                <div class="post-actions-dropdown">
                    <button class="post-menu">
                        <i class="uil uil-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#"><i class="uil uil-bookmark"></i> Save Post</a>
                        <a href="#"><i class="uil uil-share-alt"></i> Share</a>
                        <a href="#"><i class="uil uil-ban"></i> Hide</a>
                        <a href="#" class="report"><i class="uil uil-exclamation-triangle"></i> Report</a>
                    </div>
                </div>
            </div>
            
            <div class="post-content">
                <p>${post.content}</p>
                <div class="post-tags">
                    ${extractHashtags(post.content).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="post-stats">
                <div class="reactions">
                    <div class="reaction-icons">
                        <span class="reaction-count">${post.likes} likes</span>
                    </div>
                    <div class="comments-count">
                        <i class="uil uil-comment"></i>
                        <span>${post.comments} comments</span>
                    </div>
                    <div class="shares-count">
                        <i class="uil uil-share"></i>
                        <span>${post.shares} shares</span>
                    </div>
                </div>
            </div>
            
            <div class="post-actions">
                <button class="post-action like-btn" data-liked="false">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="action-text">Like</span>
                </button>
                <button class="post-action comment-btn">
                    <i class="uil uil-comment"></i>
                    <span class="action-text">Comment</span>
                </button>
                <button class="post-action share-btn">
                    <i class="uil uil-share"></i>
                    <span class="action-text">Share</span>
                </button>
                <button class="post-action save-btn" data-saved="false">
                    <i class="uil uil-bookmark"></i>
                    <span class="action-text">Save</span>
                </button>
            </div>
            
            <div class="comments-preview">
                <div class="comment-input">
                    <img src="./images/profile-1.jpg" alt="You">
                    <input type="text" placeholder="Write a comment...">
                </div>
            </div>
        `;
        
        // Insert at the top of the feed
        feedPosts.insertBefore(postElement, feedPosts.firstChild);
        
        // Add event listeners to new post
        addPostEventListeners(postElement);
    }
    
    function extractHashtags(text) {
        const hashtags = text.match(/#\w+/g);
        return hashtags ? hashtags.slice(0, 3) : [];
    }
    
    function addPostEventListeners(postElement) {
        const likeBtn = postElement.querySelector('.like-btn');
        const saveBtn = postElement.querySelector('.save-btn');
        const commentBtn = postElement.querySelector('.comment-btn');
        const shareBtn = postElement.querySelector('.share-btn');
        const postMenu = postElement.querySelector('.post-menu');
        const commentInput = postElement.querySelector('.comment-input input');
        
        likeBtn.addEventListener('click', toggleLike);
        saveBtn.addEventListener('click', toggleSave);
        commentBtn.addEventListener('click', focusCommentInput);
        shareBtn.addEventListener('click', sharePost);
        postMenu.addEventListener('click', togglePostMenu);
        
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                addComment(this.value.trim());
                this.value = '';
                showToast('Comment added!', 'success');
            }
        });
    }
    
    // ========== Post Interactions ==========
    function toggleLike() {
        const liked = this.getAttribute('data-liked') === 'true';
        const actionText = this.querySelector('.action-text');
        const icon = this.querySelector('i');
        
        if (liked) {
            this.setAttribute('data-liked', 'false');
            actionText.textContent = 'Like';
            icon.className = 'uil uil-thumbs-up';
            showToast('Post unliked', 'info');
        } else {
            this.setAttribute('data-liked', 'true');
            actionText.textContent = 'Liked';
            icon.className = 'uil uil-thumbs-up';
            showToast('Post liked!', 'success');
        }
    }
    
    function toggleSave() {
        const saved = this.getAttribute('data-saved') === 'true';
        const actionText = this.querySelector('.action-text');
        
        if (saved) {
            this.setAttribute('data-saved', 'false');
            actionText.textContent = 'Save';
            showToast('Post removed from saved', 'info');
        } else {
            this.setAttribute('data-saved', 'true');
            actionText.textContent = 'Saved';
            showToast('Post saved!', 'success');
        }
    }
    
    function focusCommentInput() {
        const commentInput = this.closest('.post-card').querySelector('.comment-input input');
        commentInput.focus();
    }
    
    function sharePost() {
        showToast('Share dialog coming soon!', 'info');
    }
    
    function togglePostMenu(e) {
        e.stopPropagation();
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(d => {
            if (d !== dropdown) d.style.display = 'none';
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-content').forEach(d => {
            d.style.display = 'none';
        });
    });
    
    // ========== Stories ==========
    function createNewStory() {
        showToast('Create story feature coming soon!', 'info');
    }
    
    function viewStory() {
        const userName = this.querySelector('p').textContent;
        showToast(`Viewing ${userName}'s story`, 'info');
    }
    
    // ========== Friend Requests ==========
    function acceptFriendRequest(index) {
        const requestItem = document.querySelectorAll('.request-item')[index];
        if (requestItem) {
            requestItem.style.opacity = '0.5';
            setTimeout(() => {
                requestItem.remove();
                showToast('Friend request accepted!', 'success');
                updateFriendRequestCount();
            }, 300);
        }
    }
    
    function declineFriendRequest(index) {
        const requestItem = document.querySelectorAll('.request-item')[index];
        if (requestItem) {
            requestItem.style.opacity = '0.5';
            setTimeout(() => {
                requestItem.remove();
                showToast('Friend request declined', 'info');
                updateFriendRequestCount();
            }, 300);
        }
    }
    
    function updateFriendRequestCount() {
        const requestCount = document.querySelectorAll('.request-item').length;
        const requestElements = document.querySelectorAll('.tab.requests span');
        requestElements.forEach(el => {
            el.textContent = requestCount;
        });
    }
    
    // ========== Utility Functions ==========
    function showToast(message, type = 'success') {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="uil ${type === 'success' ? 'uil-check-circle' : type === 'error' ? 'uil-exclamation-triangle' : 'uil-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        if (!document.querySelector('#toast-styles')) {
            const styles = document.createElement('style');
            styles.id = 'toast-styles';
            styles.textContent = `
                .toast {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: var(--bg-secondary);
                    color: var(--text-primary);
                    padding: 12px 20px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-lg);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    z-index: var(--z-toast);
                    transform: translateY(100px);
                    opacity: 0;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                    border: 1px solid var(--border-color);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
                
                .toast.show {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .toast.success {
                    border-left: 4px solid var(--accent-success);
                }
                
                .toast.error {
                    border-left: 4px solid var(--accent-danger);
                }
                
                .toast.info {
                    border-left: 4px solid var(--accent-primary);
                }
                
                .toast i {
                    font-size: 1.25rem;
                }
                
                .toast.success i {
                    color: var(--accent-success);
                }
                
                .toast.error i {
                    color: var(--accent-danger);
                }
                
                .toast.info i {
                    color: var(--accent-primary);
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    function simulateAPICall(message, duration) {
        showToast(message, 'info');
        return new Promise(resolve => setTimeout(resolve, duration));
    }
    
    function closeAllModals() {
        themeModal.classList.remove('show');
        createPostModal.classList.remove('show');
        notificationsPanel.classList.remove('show');
        messagesPanel.classList.remove('show');
        mobileSearchOverlay.style.display = 'none';
        mobileNavMenu.classList.remove('active');
        
        // Reset body overflow
        document.body.style.overflow = '';
    }
    
    function handleResize() {
        // Close modals on mobile when resizing to desktop
        if (window.innerWidth > 1024) {
            mobileSearchOverlay.style.display = 'none';
            mobileNavMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Update text visibility based on screen size
        const desktopTexts = document.querySelectorAll('.desktop-text');
        desktopTexts.forEach(text => {
            text.style.display = window.innerWidth > 768 ? 'inline' : 'none';
        });
    }
    
    // Initialize responsive text visibility
    handleResize();
    
    // ========== Add comment function ==========
    function addComment(text) {
        // In a real app, this would send to server
        console.log('Adding comment:', text);
    }
    
    // ========== Initialize post event listeners ==========
    function initializePostInteractions() {
        document.querySelectorAll('.post-card').forEach(post => {
            addPostEventListeners(post);
        });
    }
    
    // Initialize all post interactions
    initializePostInteractions();
});