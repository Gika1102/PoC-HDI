// ============================================================
// CONFIGURAÇÃO
// ============================================================

const AGENT_API_URL = "http://127.0.0.1:8000/chat";


// ============================================================
// ABRIR / FECHAR CHAT
// ============================================================

function openAgentChat() {

    // Fecha o drawer anterior
    if (typeof closeDrawer === "function") {
        closeDrawer();
    }

    document
        .getElementById("agentChatOverlay")
        .classList.add("active");

    document
        .getElementById("agentChat")
        .classList.add("open");

    setTimeout(() => {

        document
            .getElementById("agentChatInput")
            .focus();

    }, 300);
}


function closeAgentChat() {

    document
        .getElementById("agentChatOverlay")
        .classList.remove("active");

    document
        .getElementById("agentChat")
        .classList.remove("open");
}


// ============================================================
// ENVIAR SUGESTÃO
// ============================================================

function sendSuggestedQuestion(question) {

    const input =
        document.getElementById("agentChatInput");

    input.value = question;

    sendAgentMessage();
}


// ============================================================
// ENTER PARA ENVIAR
// ============================================================

function handleAgentInput(event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        sendAgentMessage();
    }
}


// ============================================================
// ADICIONAR MENSAGEM
// ============================================================

function addAgentMessage(
    text,
    sender = "agent"
) {

    const container =
        document.getElementById(
            "agentChatMessages"
        );


    const wrapper =
        document.createElement("div");


    wrapper.className =
        `agent-message ${sender}`;


    const avatar =
        document.createElement("div");

    avatar.className =
        "message-avatar";

    avatar.textContent =
        sender === "user"
        ? "●"
        : "✦";


    const content =
        document.createElement("div");

    content.className =
        "message-content";


    const author =
        document.createElement("div");

    author.className =
        "message-author";

    author.textContent =
        sender === "user"
        ? "Você"
        : "AI Agent";


    const bubble =
        document.createElement("div");

    bubble.className =
        "message-bubble";

    bubble.textContent = text;


    content.appendChild(author);

    content.appendChild(bubble);


    wrapper.appendChild(avatar);

    wrapper.appendChild(content);


    container.appendChild(wrapper);


    container.scrollTop =
        container.scrollHeight;
}


// ============================================================
// THINKING
// ============================================================

function showAgentThinking() {

    const container =
        document.getElementById(
            "agentChatMessages"
        );


    const thinking =
        document.createElement("div");


    thinking.className =
        "agent-message agent";

    thinking.id =
        "agentThinking";


    thinking.innerHTML = `

        <div class="message-avatar">
            ✦
        </div>

        <div class="message-content">

            <div class="message-author">
                AI Agent
            </div>

            <div class="message-bubble">

                <div class="agent-thinking">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </div>

    `;


    container.appendChild(thinking);


    container.scrollTop =
        container.scrollHeight;
}


function hideAgentThinking() {

    const thinking =
        document.getElementById(
            "agentThinking"
        );


    if (thinking) {
        thinking.remove();
    }
}


// ============================================================
// CHAMADA AO BACKEND
// ============================================================

async function sendAgentMessage() {

    const input =
        document.getElementById(
            "agentChatInput"
        );


    const sendButton =
        document.getElementById(
            "agentSendButton"
        );


    const message =
        input.value.trim();


    if (!message) {
        return;
    }


    // Mostra mensagem do usuário
    addAgentMessage(
        message,
        "user"
    );


    input.value = "";


    sendButton.disabled = true;


    showAgentThinking();


    try {

        const response =
            await fetch(
                AGENT_API_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            message: message
                        })
                }
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }


        const data =
            await response.json();


        hideAgentThinking();


        if (data.response) {

            addAgentMessage(
                data.response,
                "agent"
            );

        } else {

            addAgentMessage(
                "Não consegui gerar uma resposta para essa consulta.",
                "agent"
            );
        }


    } catch (error) {

        hideAgentThinking();


        console.error(
            "Agent API Error:",
            error
        );


        addAgentMessage(
            "Não consegui me conectar ao agente. Verifique se o backend está rodando.",
            "agent"
        );

    } finally {

        sendButton.disabled = false;

        input.focus();

    }
}


// ============================================================
// ESC FECHA O CHAT
// ============================================================

window.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeAgentChat();

        }

    }
);