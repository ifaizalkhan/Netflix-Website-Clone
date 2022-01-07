var isOpen = false;
    var node;
    function openUp(elem) {
        if (isOpen) {
            if (elem == node) {
                node.classList.remove("answer-open");
                node = null;
                isOpen = !isOpen;
            }
            else {
                node.classList.remove("answer-open");
                elem.classList.add("answer-open");
                node = elem;
            }
        }
        else {
            elem.classList.add("answer-open");
            node = elem;
            isOpen = !isOpen;
        }
    }