window.__ModuleLoader__.load({
  id: 'dsh-mememiao',
  factory(require) {
    const React = require('react')
    const { useEffect, useState } = React
    const h = React.createElement

    const CSS = `
      .mm-settings { display:flex; flex-direction:column; gap:16px; color:var(--dsw-alias-label-primary); }
      .mm-settings, .mm-settings *, .mm-settings *::before, .mm-settings *::after { box-sizing:border-box; }
      .mm-head { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; }
      .mm-head-main { min-width:0; display:flex; flex-direction:column; gap:4px; }
      .mm-title { margin:0; font-size:18px; font-weight:600; letter-spacing:-.01em; }
      .mm-sub { margin:0; color:var(--dsw-alias-label-secondary); font-size:12px; line-height:1.7; }
      .mm-pill { display:inline-flex; align-items:center; gap:5px; height:22px; padding:0 9px; border-radius:999px; font-size:11px; font-weight:500; white-space:nowrap; background:var(--dsw-alias-bg-layer-2); color:var(--dsw-alias-label-secondary); }
      .mm-dot { width:6px; height:6px; border-radius:999px; background:currentColor; }
      .mm-ok { color:var(--dsw-alias-state-success-primary); }
      .mm-err { color:var(--dsw-alias-state-error-primary); }
      .mm-card { border:1px solid var(--dsw-alias-border-l1); border-radius:12px; padding:16px; background:var(--dsw-alias-bg-layer-1); display:flex; flex-direction:column; gap:12px; }
      .mm-card-title { margin:0; font-size:13px; font-weight:600; }
      .mm-card-desc { margin:0; color:var(--dsw-alias-label-secondary); font-size:12px; line-height:1.7; }
      .mm-field { display:flex; flex-direction:column; gap:6px; }
      .mm-label-row { display:flex; align-items:center; justify-content:space-between; gap:12px; }
      .mm-label { font-size:12px; font-weight:500; }
      .mm-hint { font-size:11px; color:var(--dsw-alias-label-secondary); line-height:1.6; }
      .mm-input { width:100%; height:36px; border:1px solid var(--dsw-alias-border-l1); border-radius:8px; background:var(--dsw-alias-bg-base); color:var(--dsw-alias-label-primary); padding:0 11px; font:inherit; font-size:12px; outline:none; }
      .mm-input:focus { border-color:var(--dsw-alias-brand-primary); box-shadow:0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent); }
      .mm-actions { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
      .mm-btn { display:inline-flex; align-items:center; justify-content:center; gap:5px; height:32px; padding:0 13px; border-radius:8px; border:1px solid var(--dsw-alias-border-l1); background:var(--dsw-alias-bg-layer-1); color:var(--dsw-alias-label-primary); font:inherit; font-size:12px; font-weight:500; cursor:pointer; }
      .mm-btn-primary { border-color:var(--dsw-alias-button-primary-fill,var(--dsw-alias-brand-primary)); background:var(--dsw-alias-button-primary-fill,var(--dsw-alias-brand-primary)); color:var(--dsw-alias-label-primary-foreground,#fff); }
      .mm-btn-primary:hover:not([disabled]) { border-color:var(--dsw-alias-button-primary-hover,var(--dsw-alias-button-primary-fill,var(--dsw-alias-brand-primary))); background:var(--dsw-alias-button-primary-hover,var(--dsw-alias-button-primary-fill,var(--dsw-alias-brand-primary))); }
      .mm-btn-danger { border-color:transparent; background:transparent; color:var(--dsw-alias-state-error-primary); }
      .mm-btn[disabled] { opacity:.5; cursor:not-allowed; }
      .mm-note { display:flex; align-items:flex-start; gap:7px; padding:9px 10px; border-radius:8px; background:var(--dsw-alias-bg-layer-2); color:var(--dsw-alias-label-secondary); font-size:11px; line-height:1.65; }
      .mm-alert { padding:9px 10px; border-radius:8px; background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent); color:var(--dsw-alias-state-error-primary); font-size:11.5px; line-height:1.65; }
      .mm-kv { border:1px solid var(--dsw-alias-border-l1); border-radius:8px; overflow:hidden; }
      .mm-row { display:flex; align-items:center; gap:12px; padding:8px 10px; border-bottom:1px solid var(--dsw-alias-border-l1); }
      .mm-row:last-child { border-bottom:0; }
      .mm-k { width:76px; flex:0 0 76px; font-size:11.5px; color:var(--dsw-alias-label-secondary); }
      .mm-v { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-family:ui-monospace,Consolas,monospace; font-size:11px; color:var(--dsw-alias-label-primary); }
      .mm-tools { display:flex; flex-wrap:wrap; gap:6px; }
      .mm-tool { display:inline-flex; align-items:center; gap:5px; padding:5px 8px; border-radius:7px; border:1px solid var(--dsw-alias-border-l1); background:var(--dsw-alias-bg-base); font-family:ui-monospace,Consolas,monospace; font-size:10.5px; color:var(--dsw-alias-label-secondary); }
      .mm-tool svg { width:11px; height:11px; color:var(--dsw-alias-state-success-primary); }
      .mm-toggle-row { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; }
      .mm-toggle { position:relative; width:38px; height:22px; flex:0 0 38px; border:0; border-radius:999px; background:var(--dsw-alias-bg-layer-2); cursor:pointer; padding:0; }
      .mm-toggle::after { content:''; position:absolute; top:2px; left:2px; width:18px; height:18px; border-radius:999px; background:var(--dsw-alias-bg-base); box-shadow:0 1px 2px rgba(0,0,0,.18); transition:transform .15s ease; }
      .mm-toggle[data-on="true"] { background:var(--dsw-alias-brand-primary); }
      .mm-toggle[data-on="true"]::after { transform:translateX(16px); }
      .mm-seg { display:inline-flex; padding:2px; border-radius:8px; background:var(--dsw-alias-bg-layer-2); gap:2px; }
      .mm-seg button { height:27px; padding:0 12px; border:0; border-radius:6px; background:transparent; color:var(--dsw-alias-label-secondary); font:inherit; font-size:11.5px; cursor:pointer; }
      .mm-seg button[data-active="true"] { background:var(--dsw-alias-bg-base); color:var(--dsw-alias-label-primary); font-weight:600; box-shadow:0 1px 2px rgba(0,0,0,.08); }
      .mm-chips { display:flex; flex-wrap:wrap; gap:6px; }
      .mm-chip { height:27px; padding:0 10px; border:1px solid var(--dsw-alias-border-l1); border-radius:999px; background:var(--dsw-alias-bg-base); color:var(--dsw-alias-label-secondary); font:inherit; font-size:11.5px; cursor:pointer; }
      .mm-chip[data-on="true"] { border-color:var(--dsw-alias-brand-primary); background:var(--dsw-alias-bg-layer-2); color:var(--dsw-alias-brand-primary); font-weight:500; }
      .mm-toast { font-size:11.5px; color:var(--dsw-alias-label-secondary); }
      .mm-example { display:flex; align-items:center; gap:8px; padding:9px 10px; border-radius:8px; background:var(--dsw-alias-bg-layer-2); font-size:11.5px; color:var(--dsw-alias-label-secondary); }
      .mm-example code { font-family:ui-monospace,Consolas,monospace; font-size:10.5px; color:var(--dsw-alias-brand-primary); }
    `

    async function call(path, options) {
      const response = await fetch(`/api/dsh-mememiao/${path}`, {
        credentials: 'same-origin',
        ...options,
        headers: { 'content-type': 'application/json', ...(options?.headers || {}) },
      })
      const body = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(body?.error?.message || `请求失败（HTTP ${response.status}）`)
      }
      return body
    }

    function IconCheck() {
      return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, 'aria-hidden': true },
        h('path', { d: 'M20 6 9 17l-5-5' }))
    }

    function StatusPill({ state }) {
      const connected = state?.connected === true
      return h('span', { className: `mm-pill ${connected ? 'mm-ok' : ''}` },
        h('span', { className: 'mm-dot' }), connected ? '已连接' : '未连接')
    }

    function MememioSettings() {
      const [state, setState] = useState(null)
      const [error, setError] = useState('')
      const [notice, setNotice] = useState('')
      const [busy, setBusy] = useState('')
      const [baseUrl, setBaseUrl] = useState('https://memes.example.com')
      const [token, setToken] = useState('')
      const [showToken, setShowToken] = useState(false)

      async function load() {
        try {
          const next = await call('state')
          setState(next)
          if (next.baseUrl) setBaseUrl(next.baseUrl)
          setError('')
        } catch (caught) {
          setError(String(caught.message || caught))
        }
      }

      useEffect(() => { load() }, [])

      async function testConnection() {
        setBusy('test')
        setNotice('')
        try {
          const result = await call('test', { method: 'POST', body: JSON.stringify({ baseUrl, token }) })
          if (result.ok) {
            setNotice(`连通成功：${result.tools.length} 个工具 · ${result.latencyMs} ms`)
            setError('')
          } else {
            setNotice('')
            setError(result.error?.message || '连接失败')
          }
        } catch (caught) {
          setNotice('')
          setError(String(caught.message || caught))
        } finally {
          setBusy('')
        }
      }

      async function connect() {
        setBusy('connect')
        setNotice('')
        try {
          const result = await call('connect', { method: 'POST', body: JSON.stringify({ baseUrl, token }) })
          if (!result.ok) {
            setError(result.error?.message || '连接失败')
            return
          }
          setState(result.state)
          setBaseUrl(result.state.baseUrl)
          setToken('')
          setError('')
          setNotice(result.warning || '已连接，工具已注入当前 profile。')
        } catch (caught) {
          setError(String(caught.message || caught))
        } finally {
          setBusy('')
        }
      }

      async function disconnect() {
        if (!window.confirm('断开后模型将不能再用 MeMeMio 工具；地址会保留，令牌会被删除。确定断开？')) return
        setBusy('disconnect')
        try {
          const result = await call('disconnect', { method: 'POST', body: '{}' })
          setState(result.state)
          setToken('')
          setNotice(result.warning || '已断开。')
          setError('')
        } catch (caught) {
          setError(String(caught.message || caught))
        } finally {
          setBusy('')
        }
      }

      async function savePrefs(patch) {
        setBusy('prefs')
        try {
          const result = await call('prefs', { method: 'POST', body: JSON.stringify(patch) })
          setState(result.state)
        } catch (caught) {
          setError(String(caught.message || caught))
        } finally {
          setBusy('')
        }
      }

      const connected = state?.connected === true
      const displayBase = state?.baseUrl || baseUrl

      return h('div', { className: 'mm-settings' },
        h('style', null, CSS),
        h('div', { className: 'mm-head' },
          h('div', { className: 'mm-head-main' },
            h('h2', { className: 'mm-title' }, 'MeMeMio 表情包'),
            h('p', { className: 'mm-sub' }, '把共享表情包库接进对话。只读，不会上传、修改或删除任何图片。')),
          h(StatusPill, { state })),

        error !== '' && h('div', { className: 'mm-alert' }, error),
        notice !== '' && h('div', { className: 'mm-note' }, notice),

        !connected && h('div', { className: 'mm-card' },
          h('h3', { className: 'mm-card-title' }, '连接你的表情包库'),
          h('p', { className: 'mm-card-desc' }, '用 MeMeMio 的 MCP 接口接入；连接后模型会在聊天里自动检索、挑图。'),
          h('div', { className: 'mm-field' },
            h('div', { className: 'mm-label-row' },
              h('label', { className: 'mm-label' }, '服务地址'),
              h('span', { className: 'mm-hint' }, '只填站点，自动补 /mcp')),
            h('input', {
              className: 'mm-input',
              value: baseUrl,
              spellCheck: false,
              onChange: (event) => setBaseUrl(event.target.value),
              placeholder: 'https://memes.example.com',
            })),
          h('div', { className: 'mm-field' },
            h('div', { className: 'mm-label-row' },
              h('label', { className: 'mm-label' }, '访问令牌'),
              h('span', { className: 'mm-hint' }, '只读；保存后只显示掩码')),
            h('input', {
              className: 'mm-input',
              type: showToken ? 'text' : 'password',
              value: token,
              autoComplete: 'off',
              onChange: (event) => setToken(event.target.value),
              placeholder: 'mcp_…',
            })),
          h('div', { className: 'mm-actions' },
            h('button', { className: 'mm-btn', type: 'button', disabled: busy !== '', onClick: testConnection },
              busy === 'test' ? '测试中…' : '测试连接'),
            h('button', { className: 'mm-btn mm-btn-primary', type: 'button', disabled: busy !== '', onClick: connect },
              busy === 'connect' ? '连接中…' : '保存并连接'))),

        connected && state !== null && h('div', { className: 'mm-card' },
          h('h3', { className: 'mm-card-title' }, '连接详情'),
          h('div', { className: 'mm-kv' },
            h('div', { className: 'mm-row' }, h('span', { className: 'mm-k' }, '服务地址'), h('span', { className: 'mm-v' }, displayBase)),
            h('div', { className: 'mm-row' }, h('span', { className: 'mm-k' }, '访问令牌'), h('span', { className: 'mm-v' }, state.tokenMasked || '已保存')),
            h('div', { className: 'mm-row' }, h('span', { className: 'mm-k' }, '可用工具'), h('span', { className: 'mm-v' }, `${state.tools.length} 个`))),
          h('div', { className: 'mm-actions' },
            h('button', { className: 'mm-btn', type: 'button', disabled: busy !== '', onClick: testConnection }, '重新测试'),
            h('button', { className: 'mm-btn mm-btn-danger', type: 'button', disabled: busy !== '', onClick: disconnect }, '断开连接'))),

        connected && state !== null && h('div', { className: 'mm-card' },
          h('div', { className: 'mm-toggle-row' },
            h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 } },
              h('h3', { className: 'mm-card-title' }, '自动表达'),
              h('p', { className: 'mm-card-desc' }, '回复带情绪时，模型会自己挑一张图，不需要你说「发个表情包」。')),
            h('button', {
              className: 'mm-toggle',
              type: 'button',
              'data-on': String(state.auto),
              'aria-label': '自动表达',
              'aria-checked': String(state.auto),
              role: 'switch',
              disabled: busy !== '',
              onClick: () => savePrefs({ auto: !state.auto, frequency: state.frequency, scenes: state.scenes, allowSerious: state.allowSerious }),
            })),
          h('div', { className: 'mm-field' },
            h('span', { className: 'mm-label' }, '使用频率'),
            h('div', { className: 'mm-seg' },
              [['subtle', '克制'], ['natural', '自然'], ['active', '活跃']].map(([value, label]) =>
                h('button', {
                  key: value,
                  type: 'button',
                  'data-active': String(state.frequency === value),
                  disabled: busy !== '',
                  onClick: () => savePrefs({ auto: state.auto, frequency: value, scenes: state.scenes, allowSerious: state.allowSerious }),
                }, label)))),
          h('div', { className: 'mm-field' },
            h('span', { className: 'mm-label' }, '触发场景'),
            h('div', { className: 'mm-chips' },
              ['开心', '吐槽', '无语', '庆祝', '安慰', '打招呼', '拒绝', '其他'].map((scene) =>
                h('button', {
                  key: scene,
                  type: 'button',
                  className: 'mm-chip',
                  'data-on': String(state.scenes.includes(scene)),
                  disabled: busy !== '',
                  onClick: () => {
                    const next = state.scenes.includes(scene)
                      ? state.scenes.filter((item) => item !== scene)
                      : [...state.scenes, scene]
                    savePrefs({ auto: state.auto, frequency: state.frequency, scenes: next, allowSerious: state.allowSerious })
                  },
                }, scene)))),
          h('div', { className: 'mm-field' },
            h('div', { className: 'mm-toggle-row' },
              h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 } },
                h('h3', { className: 'mm-card-title' }, '严肃场景配图'),
                h('p', { className: 'mm-card-desc' }, '工作、技术讨论、代码、会议等场景是否允许配图；默认关闭。')),
              h('button', {
                className: 'mm-toggle',
                type: 'button',
                'data-on': String(state.allowSerious === true),
                'aria-label': '严肃场景允许配图',
                'aria-checked': String(state.allowSerious === true),
                role: 'switch',
                disabled: busy !== '',
                onClick: () => savePrefs({
                  auto: state.auto,
                  frequency: state.frequency,
                  scenes: state.scenes,
                  allowSerious: !state.allowSerious,
                }),
              }),
            )),
          h('div', { className: 'mm-note' }, `每轮最多 1 张 · 不替代文字 · ${state.allowSerious ? '严肃场景已允许' : '严肃/工作场景跳过'} · 成人向不主动使用`)),

        connected && state !== null && h('div', { className: 'mm-card' },
          h('h3', { className: 'mm-card-title' }, '可用工具'),
          h('div', { className: 'mm-tools' },
            state.tools.map((tool) => h('span', { key: tool, className: 'mm-tool' }, h(IconCheck), tool))),
          h('p', { className: 'mm-card-desc' }, '工具已注入当前 DSH 会话；自动表达只影响使用习惯，不改变 MeMeMio 的只读边界。')),

        !connected && h('div', { className: 'mm-note' },
          '成人向与标签过滤器在 MeMeMio 网页的「设置 → MCP 接入」里管理；插件只负责连接，不能绕过它们。'),
      )
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('settings.section', () => ctx.slots.register({
          name: 'settings.section',
          id: 'mememio',
          order: 45,
          label: 'MeMeMio 表情包',
        }, MememioSettings))
      },
    }
  },
})

