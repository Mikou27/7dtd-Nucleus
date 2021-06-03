Hub.Handler.Version = 4; // Released at https://hub.splitscreen.me/ on Mon Apr 20 2020 05:06:56 GMT+0000 (UTC).
Hub.Handler.Id = "RkbcpmL5dNbrDcfjL";
Hub.Maintainer.Name = "Talos91";
Hub.Maintainer.Id = "eeL7HAz8zJovChWw4";

Game.DirSymlinkExclusions = ["7DaysToDie_Data\\Plugins"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "7DaysToDie_EAC.exe", "7dLauncher.exe"];
Game.DirExclusions = ["EasyAntiCheat"];
Game.GameName = "7 Days to Die";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "7daystodie.exe";
Game.SteamID = "251570";
Game.GUID = "7 Days to Die";
Game.HideTaskbar = false;
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "";
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = true;
Game.LauncherTitle = "";
Game.SupportsPositioning = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "7 Days To Die";
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll", "xinput9_1_0.dll"];
Game.PauseBetweenStarts = 40;
Game.FakeFocus = true;
Game.PromptBetweenInstances = true;
Game.ResetWindows = true;
Game.SetForegroundWindowElsewhere = true;
Game.Description =
  "Join in the server before starting the next instance. You can use the mouse in the main menu. Sometimes, you need a second try for join in the server. Press the END key to lock the input for all instances to have their own cursor. Press the END key again to unlock the input. You can also use CTR+Q to close Nucleus and all its instances.";

Game.PlayerSteamIDs = ["76561199119691467"];

Game.SupportsMultipleKeyboardsAndMice = true;

Game.HookSetCursorPos = true;
Game.HookGetCursorPos = true;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = true;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = true;
Game.SendNormalKeyboardInput = true;
Game.SendScrollWheel = true;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputMouse = true;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = true;
Game.DrawFakeMouseCursorForControllers = true;
Game.UpdateFakeMouseWithInternalInput = true;
Game.LockInputAtStart = false;
Game.LockInputToggleKey = 0x23;

Game.Play = function() {
  var Args = (Context.Args = " -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "Fullscreen_h2248877754", 0, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\The Fun Pimps\\7 Days To Die", "currentresolutuion_h2338577015", Context.Width + "x" + Context.Height, Nucleus.RegType.Binary);
};
