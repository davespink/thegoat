      // Clone all CSS <link> and <style> from parent if in iframe and same-origin
        // so takes css from parent unless specifically styled
        if (window.parent && window.parent !== window) {
            // Copy <link rel="stylesheet">
            Array.from(window.parent.document.querySelectorAll('link[rel="stylesheet"]')).forEach(link => {
                const clone = document.createElement('link');
                clone.rel = 'stylesheet';
                clone.href = link.href;
                document.head.appendChild(clone);
            });
            // Copy <style> blocks
            Array.from(window.parent.document.querySelectorAll('style')).forEach(style => {
                const clone = document.createElement('style');
                clone.textContent = style.textContent;
                document.head.appendChild(clone);
            });
        }