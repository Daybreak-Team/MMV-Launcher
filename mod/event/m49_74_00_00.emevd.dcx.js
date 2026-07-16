// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49740000)) {
            $InitializeCommonEvent(0, 90055000, 49745200, 1, 49742200, 49740201);
            $InitializeCommonEvent(0, 90055001, 49745200, 1, 49740201, 49740200);
        }
        if (EventFlag(49740001)) {
            $InitializeCommonEvent(0, 90055000, 49745200, 2, 49742200, 49740201);
            $InitializeCommonEvent(0, 90055001, 49745200, 2, 49740201, 49740200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49740200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49742200, 49740200);
    }
    $InitializeCommonEvent(0, 90065121, 49740200, 49740205, 49740800, 931000, 690047, 49745210, 49740800, 904770002, 49740810, 904770003, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49740200, 49740800, 931000, 49745210, 49740800, 904770002, 49740810, 904770003, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49740800, 2, 0, 0, 1050, 931000, 904770002, 49740800);
    }
    $InitializeCommonEvent(0, 90015012, 49745210, 49740200);
    $InitializeCommonEvent(1, 90015012, 0, 49740200);
    $InitializeCommonEvent(0, 90015020, 49740200, 49740800);
    $InitializeCommonEvent(0, 90015008, 49740205, 49740800, 931000, 49745210, -1, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065137, 49740800, 49740810, 49740200, 49740800, 904770003, 49740206, 1.0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065138, 49740800, 49740810, 49740200, 49740800, 904770003, 49740206, 49740207, 1.0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49742200, 49740800);
        $InitializeCommonEvent(0, 90015023, 49740200, 40, 0, 49745210, 49740800, 904770002, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015026, 49740206, 40, 0, 49745210, 49740810, 904770003);
        $InitializeCommonEvent(0, 90015030, 49740200, 49745210, 40, 931000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49740200, 49740800, 49745210, 1020, 931000, 110320, 904770002, 49740800);
        $InitializeCommonEvent(0, 90015470, 49742200, 49740200, 49740800, 49745210, 0, 0, 49745210);
        $InitializeCommonEvent(0, 90015478, 49740800, 49740800);
        $InitializeCommonEvent(0, 90015478, 49740810, 49740800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49745210, 49740200, 49740800, 49742200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49742200, 49740800);
        $InitializeCommonEvent(0, 90015460, 49742200, 49740810);
        $InitializeCommonEvent(0, 90015460, 49742200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49742200, 49740800);
        $InitializeCommonEvent(0, 90015475, 49742200, 49740810);
        $InitializeCommonEvent(0, 90015475, 49742200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49740800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49740000, 49740300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49740000, 49740300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49740000, 49740300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49740000, 49740300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49740000, 49740300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49740000, 49740300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49740000, 49740301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49740000, 49740301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49740000, 49740301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49740000, 49740301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49740000, 49740301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49740000, 49740301);
    }
    $InitializeEvent(0, 49742820, 49740800, 11008000, 11008001, 11008002, 960023, 960017, 960018, 960019);
    $InitializeEvent(1, 49742820, 49740810, 11008003, 11008004, 11008005, 960023, 960020, 960021, 960022);
});

$Event(49742820, Default, function(chrEntityId, eventflagId, eventflagId2, eventflagId3, speffectId, speffectId2, speffectId3, speffectId4) {
    SetEventFlagID(eventflagId, OFF);
    SetEventFlagID(eventflagId2, OFF);
    SetEventFlagID(eventflagId3, OFF);
    //SetSpEffect(10000, 68);
    WaitFor(CharacterHasSpEffect(chrEntityId, speffectId));
    RandomlySetEventFlagInRange(eventflagId, eventflagId3, ON);
    if (EventFlag(eventflagId)) {
        SetSpEffect(chrEntityId, speffectId2);
    } 
    else if (EventFlag(eventflagId2)) {
        SetSpEffect(chrEntityId, speffectId3);
    }
    else if (EventFlag(eventflagId3)) {
        SetSpEffect(chrEntityId, speffectId4);
    }
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(49742800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFor(HPRatio(chrEntityId3) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 902500520);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 902500520);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId3);
});

$Event(49742810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5, chrEntityId2) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(48600800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(48600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
});
