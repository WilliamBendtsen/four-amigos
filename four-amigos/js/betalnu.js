'use strict'
            function showContent(contentId) {
                // Skjul alle indholdselementer
            let contents = document.querySelectorAll('.content');
                contents.forEach(function(content) {
                content.style.display = 'none';

                });
        
                // Vis det valgte indhold
            let selectedContent = document.getElementById(contentId);
            selectedContent.style.display = 'block';
            }         
