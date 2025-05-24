// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="how-to/index.html">How do I use this?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="how-to/Registering.html">Registering an API Client</a></li><li class="chapter-item expanded "><a href="how-to/SimpleSetup.html">Simple Setup</a></li><li class="chapter-item expanded "><a href="how-to/CustomSetup.html">Custom Configuration &amp; Usage</a></li><li class="chapter-item expanded "><a href="how-to/Troubleshooting.html">Troubleshooting</a></li></ol></li><li class="chapter-item expanded "><a href="blueprint-api/index.html">Blueprint API Documentation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blueprint-api/functions/index.html">Functions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blueprint-api/functions/PerformAuthentication.html">Perform Authentication</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/PerformAuthenticationUMG.html">Perform Authentication (UMG Browser)</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/RefreshAPIToken.html">Refresh API Token</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/GetUserInfo.html">Get User Info</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/QuerySubscribeStarAPI.html">Query SubscribeStar API</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/ParseAPITokenInfo.html">Parse API Token Info</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/HTTPRequest.html">HTTP Request</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/HTTPRequestBearer.html">HTTP Request (with bearer token)</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/HTTPGET.html">HTTP GET</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/HTTPPOST.html">HTTP POST</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/MakeSubscribeStarAuthURI.html">Make SubscribeStar Auth URI</a></li><li class="chapter-item expanded "><a href="blueprint-api/functions/OpenURL.html">Open URL</a></li></ol></li><li class="chapter-item expanded "><a href="blueprint-api/structs/index.html">Structs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blueprint-api/structs/NBSubscribeStarAPITokenInfo.html">NB SubscribeStar API Token Info</a></li><li class="chapter-item expanded "><a href="blueprint-api/structs/NBSubscribeStarUserInfo.html">NB SubscribeStar User Info</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="reference.html">C++ API Reference</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/structs.html">Structs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/structs/FNBSubscribeStarAPITokenInfo.html">FNBSubscribeStarAPITokenInfo</a></li><li class="chapter-item expanded "><a href="reference/structs/FNBSubscribeStarUserInfo.html">FNBSubscribeStarUserInfo</a></li></ol></li><li class="chapter-item expanded "><a href="reference/classes.html">Classes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/classes/FNBSubscribeStarAPIClientModule.html">FNBSubscribeStarAPIClientModule</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBQuerySubscribeStarAPIAction.html">UNBQuerySubscribeStarAPIAction</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBSSAuthenticationAction.html">UNBSSAuthenticationAction</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBSSGetUserInfoAction.html">UNBSSGetUserInfoAction</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBSSHTTPRequestAction.html">UNBSSHTTPRequestAction</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBSSRefreshAPITokenAction.html">UNBSSRefreshAPITokenAction</a></li><li class="chapter-item expanded "><a href="reference/classes/UNBSubscribeStarAPIClient.html">UNBSubscribeStarAPIClient</a></li></ol></li><li class="chapter-item expanded "><a href="reference/delegates.html">Delegates</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/delegates/FGetSubscribeStarUserInfoActionEvent.html">FGetSubscribeStarUserInfoActionEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FGetSubscribeStarUserInfoActionFailedEvent.html">FGetSubscribeStarUserInfoActionFailedEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBPerformSSAuthenticationActionEvent.html">FNBPerformSSAuthenticationActionEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBPerformSSAuthenticationActionFailedEvent.html">FNBPerformSSAuthenticationActionFailedEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBQuerySubscribeStarAPIActionEvent.html">FNBQuerySubscribeStarAPIActionEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBSSHTTPRequestActionEvent.html">FNBSSHTTPRequestActionEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBSSRefreshAPITokenActionEvent.html">FNBSSRefreshAPITokenActionEvent</a></li><li class="chapter-item expanded "><a href="reference/delegates/FNBSSRefreshAPITokenActionFailedEvent.html">FNBSSRefreshAPITokenActionFailedEvent</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
